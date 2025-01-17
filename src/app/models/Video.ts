export interface Video {
  url: string;
  courseId: string;
  title: string;
  description: string;
  thumbnail: string;
  pdf: Pdf
}

export interface Pdf {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
}

