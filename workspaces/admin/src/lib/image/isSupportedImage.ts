import { fileTypeFromStream } from 'file-type';

const SUPPORTED_MAGIKA_LABEL_LIST = ['bmp', 'jpeg', 'png', 'webp'];
const SUPPORTED_MIME_TYPE_LIST = ['image/bmp', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/jxl'];

// const initMagikaPromise = magika.load({
//   configURL: '/assets/magika/config.json',
//   modelURL: '/assets/magika/model.json',
// });

export async function isSupportedImage(image: File): Promise<boolean> {
  const prediction = await fileTypeFromStream(image.stream());
  if(prediction === undefined) {
    throw new Error("Couldn't guess the file name, maybe magika was needed for sure");
  }

  if (SUPPORTED_MAGIKA_LABEL_LIST.includes(prediction.ext)) {
    return true;
  }

  if (SUPPORTED_MIME_TYPE_LIST.includes(prediction.mime)) {
    return true;
  }

  return false;
}
