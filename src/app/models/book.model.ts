export class Book{
  id: string;
  title: string;
  authors: Array<string>;
  image?: string;
  style: string;
  categories: Array<string>;
  publishedDate?: string;
  volume?: Array<number>;
  borrowing: boolean;
  borrowerName?: string;
  borrowingDate?: string;
}


