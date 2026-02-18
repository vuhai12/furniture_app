/// <reference types="vite/client" />
// types/vite-env.d.ts (hoặc file .d.ts tương đương)

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}
