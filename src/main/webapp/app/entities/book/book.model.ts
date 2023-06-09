import { IAuthor } from 'app/entities/author/author.model';

export interface IBook {
  id: number;
  title?: string | null;
  description?: string | null;
  price?: number | null;
  author?: Pick<IAuthor, 'id'> | null;
}

export type NewBook = Omit<IBook, 'id'> & { id: null };
