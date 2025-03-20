const SUPPORTED_MIME_TYPE_LIST = ['image/bmp', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/jxl'];

// const initMagikaPromise = magika.load({
//   configURL: '/assets/magika/config.json',
//   modelURL: '/assets/magika/model.json',
// });

export function isSupportedImage(image: File): boolean {
  return SUPPORTED_MIME_TYPE_LIST.includes(image.type);
}
