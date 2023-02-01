export interface Artwork {
  title: string;
  description: string;
  subjects: string[];
  mediums: string[];
  styles: string[];
  materials: string[];
  country: string;
  category: string;
  creationYear: number;
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  artistShort: {
    fullname: string;
  };
  price: number;
  otherArtworkImages: string[];
}
