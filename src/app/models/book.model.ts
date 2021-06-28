export class Book{
  id: string;
  title: string;
  author: string;
  image?: string;
  style: string;
  categories: Array<string>;
  release?: string;
  volume?: Array<number>;
  borrowing: boolean;
  borrowerName?: string;
  borrowingDate?: string;
}


