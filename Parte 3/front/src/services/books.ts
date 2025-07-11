import type { Book, BookForm } from "../utils/books/types";

const API_URL = "http://localhost:8080/api/v1/books";

export async function createBook(req: BookForm) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    throw new Error("[services/books]: createBook failed");
  }

  return (await res.json()) as Book;
}


export async function getAllBooks() {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!res.ok) {
    throw new Error("[services/books]: getAllBooks failed");
  }

  return (await res.json()) as Book[];
}