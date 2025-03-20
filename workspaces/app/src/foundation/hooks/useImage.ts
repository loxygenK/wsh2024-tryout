import { getImageUrl } from '../../lib/image/getImageUrl';

export const useImage = ({ height, imageId, width }: { height: number; imageId: string; width: number }) => {
  const dpr = window.devicePixelRatio;

  const img = new Image();
  return getImageUrl({
    height: height * dpr,
    imageId,
    width: width * dpr,
  });
};
