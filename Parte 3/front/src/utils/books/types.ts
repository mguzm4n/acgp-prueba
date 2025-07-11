export interface Book {
  id: number;
  authorName: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookForm = Omit<Book, "id" | "createdAt" | "updatedAt">;
export type ValidationErrs = Partial<BookForm>;