import path from 'path-browserify';

export function preloadImages() {
  if (process.env['PATH_LIST'] == null) {
    return;
  }

  const imagePathList: string[] = process.env['PATH_LIST'].split(',').filter((imagePath) => {
    const extension = path.parse(imagePath).ext.toLowerCase();
    return ['.bmp', '.jpg', '.jpeg', '.gif', '.png', '.webp', '.avif'].includes(extension);
  });

  window.addEventListener("load", () => {
    imagePathList.forEach((imagePath) => queueMicrotask(() => {
      const link = document.createElement('link');

      Object.assign(link, {
        as: 'image',
        crossOrigin: 'anonymous',
        fetchPriority: 'low',
        href: imagePath,
        // onerror: resolve,
        // onload: resolve,
        rel: 'preload',
      });
      document.head.appendChild(link);
    }));
  });

}
