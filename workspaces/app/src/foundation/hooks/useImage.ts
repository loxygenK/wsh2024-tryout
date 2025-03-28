import { getImageUrl } from '../../lib/image/getImageUrl';

export const useImage = ({ height, imageId, width }: { height: number; imageId: string; width: number }) => {
  const dpr = window.devicePixelRatio;

  return getImageUrl({
    height: height * dpr,
    imageId,
    width: width * dpr,
    format: "webp",
  });
};
