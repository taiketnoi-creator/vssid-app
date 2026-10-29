package com.taiq.vssidapp;

import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.FrameLayout;
import android.widget.ImageView;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends BridgeActivity {

    private ImageView splashOverlay;
    private boolean splashDismissed = false;
    private final Handler mainHandler = new Handler(Looper.getMainLooper());

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setupSplashOverlay();
        configureFastWebView();

        // Fallback safety dismissal in case network is slow on first cold start
        mainHandler.postDelayed(this::dismissSplashOverlay, 2000);
    }

    private void setupSplashOverlay() {
        ViewGroup content = findViewById(android.R.id.content);
        if (content == null) return;

        splashOverlay = new ImageView(this);
        splashOverlay.setImageResource(R.drawable.splash);
        splashOverlay.setScaleType(ImageView.ScaleType.CENTER_CROP);
        splashOverlay.setBackgroundColor(Color.WHITE);
        splashOverlay.setLayoutParams(
            new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        );
        content.addView(splashOverlay);
    }

    private void dismissSplashOverlay() {
        if (splashDismissed || splashOverlay == null) return;
        splashDismissed = true;

        splashOverlay
            .animate()
            .alpha(0f)
            .setDuration(150)
            .withEndAction(() -> {
                if (splashOverlay != null && splashOverlay.getParent() instanceof ViewGroup) {
                    ((ViewGroup) splashOverlay.getParent()).removeView(splashOverlay);
                }
                splashOverlay = null;
            })
            .start();
    }

    private void configureFastWebView() {
        final Bridge currentBridge = getBridge();
        if (currentBridge == null) return;

        final WebView webView = currentBridge.getWebView();
        if (webView == null) return;

        // Prevent black WebView surface flash before first frame renders
        webView.setBackgroundColor(Color.WHITE);

        WebSettings settings = webView.getSettings();
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setDomStorageEnabled(true);

        currentBridge.setWebViewClient(
            new BridgeWebViewClient(currentBridge) {
                @Override
                public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                    if (request != null && request.getUrl() != null) {
                        Uri uri = request.getUrl();
                        String path = uri.getPath();
                        // Serve immutable Vite-hashed /assets/* directly from bundled APK assets in <1ms
                        // while preserving live updates for any new hashes deployed on Vercel
                        if (path != null && (path.startsWith("/assets/") || path.equals("/favicon.svg"))) {
                            String assetPath = "public" + path;
                            try {
                                InputStream is = getAssets().open(assetPath);
                                String mimeType = guessMimeType(path);
                                String encoding = isTextMime(mimeType) ? "UTF-8" : null;
                                Map<String, String> headers = new HashMap<>();
                                headers.put("Access-Control-Allow-Origin", "*");
                                headers.put("Cache-Control", "public, max-age=31536000, immutable");
                                return new WebResourceResponse(mimeType, encoding, 200, "OK", headers, is);
                            } catch (IOException ignored) {
                                // Asset hash changed on Vercel Live Update -> fall through to network
                            }
                        }
                    }
                    return super.shouldInterceptRequest(view, request);
                }

                @Override
                public void onPageFinished(WebView view, String url) {
                    super.onPageFinished(view, url);
                    mainHandler.postDelayed(MainActivity.this::dismissSplashOverlay, 60);
                }

                @Override
                public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                    super.onReceivedError(view, request, error);
                    if (request != null && request.isForMainFrame()) {
                        String localUrl = currentBridge.getLocalUrl();
                        if (localUrl != null && !localUrl.equals(request.getUrl().toString())) {
                            view.loadUrl(localUrl);
                        }
                        mainHandler.post(MainActivity.this::dismissSplashOverlay);
                    }
                }
            }
        );
    }

    private String guessMimeType(String path) {
        String lower = path.toLowerCase();
        if (lower.endsWith(".js") || lower.endsWith(".mjs")) return "text/javascript";
        if (lower.endsWith(".css")) return "text/css";
        if (lower.endsWith(".png")) return "image/png";
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
        if (lower.endsWith(".svg")) return "image/svg+xml";
        if (lower.endsWith(".webp")) return "image/webp";
        if (lower.endsWith(".woff2")) return "font/woff2";
        if (lower.endsWith(".woff")) return "font/woff";
        if (lower.endsWith(".json")) return "application/json";
        return "application/octet-stream";
    }

    private boolean isTextMime(String mime) {
        return (
            mime.startsWith("text/") ||
            mime.equals("application/json") ||
            mime.equals("image/svg+xml")
        );
    }
}
