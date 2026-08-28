/** base path(/resume)를 고려해 public 자산 경로를 만든다. */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith('/') ? base : `${base}/`}${path.replace(/^\//, '')}`;
};
