# HƯỚNG DẪN DEPLOY VERCEL & CẤU HÌNH LIVE UPDATE TỰ ĐỘNG CẬP NHẬT CHO APK

Tài liệu này hướng dẫn bạn cách đưa giao diện ứng dụng lên **Vercel** (miễn phí 100%) và cấu hình để file cài đặt `.apk` tự động cập nhật mọi thay đổi mà không cần người dùng phải tải lại hay cài lại.

---

## BƯỚC 1: ĐƯA DỰ ÁN LÊN VERCEL (CHỈ MẤT 2 PHÚT)

Vercel là hosting miễn phí hàng đầu thế giới dành cho các ứng dụng web di động di động hiện nay.

1. **Cài đặt Vercel CLI (Chỉ cần chạy một lần duy nhất):**
   Mở terminal hoặc PowerShell tại thư mục dự án `d:\Vssid Vip\vssid-app` và chạy lệnh sau để cài đặt công cụ tải lên của Vercel:
   ```bash
   npm install -g vercel
   ```

2. **Khởi động quá trình Deploy:**
   Chạy lệnh sau để bắt đầu đưa web lên server:
   ```bash
   vercel
   ```
   - **Đăng nhập:** Nếu chạy lần đầu, công cụ sẽ yêu cầu bạn đăng nhập. Hãy chọn đăng nhập bằng tài khoản Google, GitHub hoặc Email. Trình duyệt sẽ mở ra để bạn xác thực trong 5 giây.
   - **Các câu hỏi hiện ra:** Sau khi đăng nhập thành công, bạn quay lại màn hình terminal bấm **Enter** liên tục để đồng ý với các cài đặt mặc định:
     * *Set up and deploy?* Bấm **Y** (Enter)
     * *Which scope?* Chọn tài khoản của bạn (Enter)
     * *Link to existing project?* Chọn **N** (Enter)
     * *Project name?* Gõ tên bạn muốn (ví dụ: `vssid-vip`) (Enter)
     * *In which directory?* Bấm Enter để chọn `./`
     * *Want to modify settings?* Bấm **N** (Enter)

3. **Hoàn thành Deploy:**
   Chỉ sau khoảng 15-30 giây chạy, Vercel sẽ cung cấp cho bạn một đường link chính thức màu xanh dạng:
   👉 **`https://vssid-vip.vercel.app`** (hoặc tên dự án bạn đã chọn).

---

## BƯỚC 2: CẤU HÌNH APK CHẠY LIVE UPDATE TỰ ĐỘNG

Khi bạn đã có đường link web của riêng mình trên Vercel, hãy làm theo các bước sau để cấu hình file APK kết nối trực tiếp đến web:

1. **Mở file [capacitor.config.json](file:///d:/Vssid%20Vip/vssid-app/capacitor.config.json) trong thư mục gốc dự án.**
2. **Cập nhật thêm khóa `"server"` chứa đường link Vercel của bạn.**
   *(Thay thế link `https://vssid-vip.vercel.app` bằng đường link thực tế bạn nhận được ở Bước 1)*:

```json
{
  "appId": "com.taiq.vssidapp",
  "appName": "VssID",
  "webDir": "dist",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https",
    "url": "https://vssid-vip.vercel.app",
    "cleartext": true
  },
  "ios": {
    "contentInset": "always"
  }
}
```

3. **Đồng bộ cấu hình sang Android Studio:**
   Chạy lệnh sau để nạp cấu hình mới vào APK:
   ```bash
   npx cap sync android
   ```

4. **Biên dịch file APK cuối cùng:**
   Chạy lệnh Gradle biên dịch để xuất file cài đặt APK:
   ```bash
   .\gradlew.bat assembleDebug
   ```
   *(File APK mới sẽ được tạo ra tại `public/vssid-app-debug.apk` và sẵn sàng gửi cho mọi người cài đặt).*

---

## BƯỚC 3: CÁCH CẬP NHẬT GIAO DIỆN TỨC THÌ TỪ LẦN SAU

Kể từ khi người dùng đã cài bản APK ở Bước 2, mỗi khi bạn chỉnh sửa bất kỳ chi tiết nào trong mã nguồn (đổi tài khoản, sửa ảnh, sửa text...):

1. **Chạy lệnh build giao diện mới:**
   ```bash
   npm run build
   ```
2. **Đẩy bản cập nhật lên Vercel:**
   ```bash
   vercel --prod
   ```

**Xong!** Chỉ mất 3 giây. Ngay khi lệnh hoàn tất, tất cả các máy điện thoại đã cài app khi mở lên sẽ tự động chạy phiên bản mới nhất bạn vừa cập nhật mà không cần cài đè hay tải lại APK mới!

---

## 🌟 TÍNH NĂNG CỔNG WEB TẢI APP & DÙNG THỬ DÀNH CHO KHÁCH HÀNG

Trang web Vercel của bạn sẽ hiển thị giao diện cực kỳ đẳng cấp bao gồm:
* **Cột bên trái:** Một Landing Page giới thiệu app chuyên nghiệp, có logo, danh sách tính năng VIP, nút tải file cài đặt APK Android trực tiếp từ website, mã QR quét tải nhanh bằng camera điện thoại và hướng dẫn cài đặt.
* **Cột bên phải:** Bản demo chạy thử trực tiếp (Simulator) hiển thị chiếc điện thoại iPhone đang chạy ứng dụng VssID VIP, giúp khách hàng click trải nghiệm thực tế ngay trên máy tính của họ!
