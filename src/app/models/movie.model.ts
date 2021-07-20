export class Movie{
  id: string;
  title: string;
  type: string;
  genres: Array<string>;
  image: string;
  releaseDate: string;
  directors: Array<string>;
  writers: Array<string>;
  actors: Array<string>;
  volume?: Array<number>;
  borrowing: boolean;
  borrowerName?: string;
  borrowingDate?: string;
}
