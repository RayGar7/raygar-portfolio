// Utility to handle image paths with GitHub Pages base path
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/raygar-portfolio' : '';
  return `${basePath}${path}`;
}
