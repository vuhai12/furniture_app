/// <reference types="vite/client" />
// types/vite-env.d.ts (hoặc file .d.ts tương đương)

// Khai báo module cho các file ảnh (và các định dạng khác nếu cần)
declare module "*.png" {
  const src: string;
  export default src;
}

// Bạn nên thêm các định dạng ảnh khác mà bạn có thể dùng:
declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}
