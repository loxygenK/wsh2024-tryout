export async function zstdFetch(request: Request): Promise<Response> {
  const originalResponse = await fetch(request, {
    // headers: new Headers([...request.headers.entries(), ['Accept-Encoding', 'zstd']]),
  });

  return originalResponse;
}
