import path from 'path-browserify';

async function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function preloadImages() {
  if (process.env['PATH_LIST'] == null) {
    return;
  }

  const imagePathList: string[] = process.env['PATH_LIST'].split(',').filter((imagePath) => {
    const extension = path.parse(imagePath).ext.toLowerCase();
    return ['.bmp', '.jpg', '.jpeg', '.gif', '.png', '.webp', '.avif'].includes(extension);
  });

  const prefetch = Promise.all(
    imagePathList.map((imagePath) => {
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
    }),
  );
}
