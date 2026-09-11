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

## 📝 Recent Updates & Changelog (Lịch sử cập nhật)

### 🚀 Phiên bản ngày 11/09/2026:
* **Tự động co giãn hộp thẻ cá nhân (`src/screens/Dashboard.jsx`):**
  * **Vấn đề trước đó:** Phần "Địa chỉ" dài bị tràn ra ngoài hộp thẻ hoặc bị che khuất dòng cuối ("Thành phố Hà Nội").
  * **Giải pháp:** Sử dụng React hook (`useLayoutEffect` + `ResizeObserver` gắn vào `addressRef`) để đo đạc chính xác chiều cao thực tế theo độ dài text.
  * **Công thức kích thước động:** `cardHeight = Math.max(276, 203 + addressHeight + 18)` cùng hiệu ứng mượt mà `transition: 'height 0.2s ease-out'`. Bất kể địa chỉ ngắn hay dài, hộp thẻ đều tự fix kích thước và luôn giữ khoảng đệm đáy `18px`.
* **Căn chỉnh độ rộng & ngắt dòng địa chỉ chuẩn:**
  * Khối địa chỉ cố định `width: 215px`, `right: 20px`, `top: 203px`, `fontSize: 13px`, `lineHeight: 1.35`, căn phải (`textAlign: 'right'`).
  * Văn bản địa chỉ ngắt đều đặn, đẹp mắt thành đúng 4 dòng theo mẫu giao diện:
    1. `Ngõ 332/ số nhà 7 Lĩnh Nam`
    2. `Hoàng Mai Hà Nội , Phường`
    3. `Lĩnh Nam, Quận Hoàng Mai,`
    4. `Thành phố Hà Nội`
* **Góc dưới hộp thẻ nhọn vuông vắn (`borderRadius: '12px 12px 0 0'`):**
  * Phần hộp thẻ thông tin cá nhân có 2 góc trên bo tròn nhẹ `12px`, 2 góc dưới là **góc nhọn / vuông 90° phẳng** (`0px`), không bo tròn dưới đáy theo chuẩn thiết kế VssID.
* **Cập nhật & đồng bộ hệ thống:**
  * **Vercel Production:** Triển khai trực tiếp lên **https://vssid-app.vercel.app** (dùng cho Web & nhúng vào LadiPage).
  * **GitHub Repository:** Đã đồng bộ mã nguồn lên nhánh `main` của **taiketnoi-creator/vssid-app**.

---

## 🚨 Guidelines for Future AI Agents

1. **Always Update `README.md` Changelog:** Sau mỗi lần thực hiện thay đổi, chỉnh sửa code hoặc thêm tính năng, BẮT BUỘC phải ghi chú rõ ràng vào mục `Recent Updates & Changelog` trong file `README.md` này để người dùng và các AI Agent sau nắm bắt ngay lịch sử và cấu trúc dự án.
2. **Do Not Rename `VssID 12.2.apk` inside `public/`:** The client has external landing pages (LadiPage) configured to download the application directly from `https://vssid-app.vercel.app/VssID%2012.2.apk`. Overwrite this exact file when compiling new builds.
3. **Preserve Tactile Animation Delays:** The 200ms timeout in `handleBiometricClick` corresponds to the CSS exit transition durations. Do not change it without updating the CSS animations, or components will unmount abruptly before completing their exit transitions.
4. **Database Fallback:** The application checks credentials against local `SEED_ACCOUNTS` (cached in localStorage `vssid_accounts`) before communicating with Supabase. Ensure offline-first functionality is preserved.
5. **Gradle Path Checks:** Never run `./gradlew.bat` in directories containing Vietnamese Unicode letters or spaces, as the compilation toolchain will throw silent asset-bundling errors. Use the directory junction workflow outlined above.
6. **Environment Paths on Windows Host:**
   * **Node.js:** `C:\Users\guicci\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe` (thêm vào `$env:PATH` khi chạy terminal).
   * **Vercel CLI:** `C:\Users\guicci\AppData\Roaming\npm\vercel.cmd`
   * **Git:** Nếu môi trường PowerShell của Windows thiếu `git`, hãy gọi qua WSL Ubuntu (`wsl.exe -d Ubuntu -e sh -c "cd '/mnt/d/Phiên bản Ai agent/Vssid Vip/vssid-app' && git ..."`).

