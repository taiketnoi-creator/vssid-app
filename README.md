# VssID VIP - Simulated Mobile Application

VssID VIP is a premium high-fidelity prototype and mock simulation of the Vietnamese Social Insurance mobile application (VssID). It is built using **React**, **Vite**, and **Capacitor** to compile native Android/iOS apps, and is deployed as a web client on **Vercel**.

This project is optimized for showcases, technology study, and UI/UX validation.

---

## 📂 Project Architecture

```text
vssid-app/
├── android/               # Native Android Capacitor Project
├── ios/                   # Native iOS Capacitor Project
├── public/                # Static public assets (VssID 12.2.apk, illustrations)
├── src/
│   ├── assets/            # App images, icons, and Artboards
│   ├── components/
│   │   ├── AccountManager.jsx  # Admin config dashboard (manage test accounts & custom database details)
│   │   └── Sidebar.jsx         # Custom sliding sidebar component
│   ├── screens/
│   │   ├── Login.jsx           # Login interface with custom biometric authentication simulator
│   │   ├── Dashboard.jsx       # User profile cards, BHXH summary, and main controls
│   │   ├── InsuranceList.jsx   # Tabbed tables showing detailed insurance history (scrollable)
│   │   └── SalaryDetail.jsx    # Responsive details view for salary and work contributions
│   ├── App.jsx            # Main app router, state controller, and data synchronization
│   ├── main.jsx           # React app mount entrypoint
│   └── supabaseClient.js  # Supabase client connector
├── capacitor.config.json  # Capacitor live update and native build settings
├── package.json           # Node scripts and dependencies
└── DEPLOY.md              # Live update and deployment handbook
```

---

## ⚙️ Core Technical Implementations & Hacks

### 1. Simulated 1-Tap Biometric Authentication (`src/screens/Login.jsx`)
* **Behavior:** Clicking the fingerprint button checks for a username. If present, it stacks `Artboard 1` underneath (`zIndex: 90`) and `Artboard 2` on top (`zIndex: 100`).
* **Tactile Transition:** Clicking the fingerprint sensor circle on `Artboard 2` triggers smooth exit animations (`isClosingPrompt`, `isClosingDialog` = `true`) for **200ms** to provide a butter-smooth visual dismiss before running `handleBiometricSuccess()`.
* **CSS Transition Keyframes:** Custom animations (`vssid-fade-in`, `vssid-fade-out`, `vssid-scale-in`, `vssid-scale-out`, `vssid-slide-up`, `vssid-slide-down`) are defined in the `<style>` block of `Login.jsx` to slide the cards and fade the backdrops.

### 2. Recursive APK Size Prevention (`package.json`)
* **The Bug:** Vite packages the compiled APK (placed in `public/`) into the `dist/` directory. Capacitor then syncs `dist/` into the native assets. If unchecked, the compiled APK gets recursively bundled inside the new APK, ballooning the size (from 17MB up to 484MB).
* **The Fix:** Modified scripts `android:sync` and `ios:build` inside `package.json` to automatically delete all `.apk` files inside the build directory before running `cap sync`. This keeps the compiled bundle size consistently at **17.1MB**.

### 3. Non-Sticky Scrollable Table (`src/screens/InsuranceList.jsx`)
* **Behavior:** The table headers (`<th>`) do **not** use sticky positioning. The entire block (`<thead>` and `<tbody>` rows) scrolls vertically together inside the `.overflowY: 'auto'` container.
* **Custom Wrapping:** Cell contents in the table utilize custom breaking rules to ensure long text blocks (such as unit names or the *"Kỹ sư cơ khí"* position) wrap cleanly onto multiple lines without causing layout shifts.

### 4. Admin Configuration Panel / Account Manager
* Tapping the **BHXH Logo** on the Login screen **5 times** opens the interactive Account Manager.
* The developer/administrator can create, modify, and delete local test profiles (adding customized names, insurance logs, or credentials) or trigger quick-login states.
* It can also be accessed directly by appending URL query parameters: `?config=true`, `?admin=true`, or `?manage=true`.

---

## 🛠️ Build & Deployment Instructions

### Local Development
```bash
npm run dev
```

### Sync Assets to Android/iOS
Always use these custom scripts (instead of raw `cap sync`) to ensure the APK-cleaning command executes and prevents recursive file-size growth:
```bash
# For Android
npm run android:sync

# For iOS
npm run ios:build
```

### Compile Debug APK (Resolving Path Encoding Errors)
Gradle fails when pathnames contain spaces or Unicode characters (e.g. `Phiên bản Ai agent`). To bypass this:
1. Create a directory junction pointing to the workspace root:
   ```cmd
   cmd /c mklink /J d:\vssid_temp "d:\Phiên bản Ai agent\Vssid Vip"
   ```
2. Navigate to `d:\vssid_temp\vssid-app\android` and compile:
   ```cmd
   .\gradlew.bat assembleDebug
   ```
3. Copy the compiled output `app-debug.apk` to targets (`public/VssID 12.2.apk`, workspace root `VssID 12.2.apk`).
4. Delete the temporary directory junction:
   ```cmd
   cmd /c rmdir d:\vssid_temp
   ```

### Web Deployment to Production (Vercel)
```bash
# Push production bundle to Vercel CDN
npx vercel --prod --yes
```

---

## 🚨 Guidelines for Future AI Agents

1. **Do Not Rename `VssID 12.2.apk` inside `public/`:** The client has external landing pages (LadiPage) configured to download the application directly from `https://vssid-app.vercel.app/VssID%2012.2.apk`. Overwrite this exact file when compiling new builds.
2. **Preserve Tactile Animation Delays:** The 200ms timeout in `handleBiometricClick` corresponds to the CSS exit transition durations. Do not change it without updating the CSS animations, or components will unmount abruptly before completing their exit transitions.
3. **Database Fallback:** The application checks credentials against local `SEED_ACCOUNTS` (cached in localStorage `vssid_accounts`) before communicating with Supabase. Ensure offline-first functionality is preserved.
4. **Gradle Path Checks:** Never run `./gradlew.bat` in directories containing Vietnamese Unicode letters or spaces, as the compilation toolchain will throw silent asset-bundling errors. Use the directory junction workflow outlined above.
