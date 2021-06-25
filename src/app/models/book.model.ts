export class Book{
  id: string;
  name?: string;
  title: string;
  author: string;
  style?: string;
  categories?: Array<string>;
  release?: string;
  volume?: Array<number>;
  borrowing: boolean;
  borrowerName?: string;
  borrowingDate?: string;
}
