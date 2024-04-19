// types.ts

export interface UnsplashPhoto {
    id: string;
    urls: {
      regular: string;
      small: string;
    };
    alt_description?: string;
  }
  