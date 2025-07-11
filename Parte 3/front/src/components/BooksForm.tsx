import { useRef, useState } from "react";
import type { BookForm, ValidationErrs } from "../utils/books/types";
import { validateForm } from "../utils/books/validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "../services/books";

const BooksForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();
  const bookMut = useMutation({
    mutationFn:  createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      formRef.current?.reset();
    },
    onError: (e) => {
      console.error('error: ', e);
    }
  });
  
  const [errors, setErrors] = useState<ValidationErrs>({});
  

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const data: BookForm = {
      authorName: formData.get('authorName') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
    };

    bookMut.mutate(data);
  };

  return (
    <form ref={formRef}
      onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del autor
        </label>
        <input
          type="text"
          id="authorName"
          name="authorName"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.authorName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ingresa el nombre del autor aquí..."
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Título del libro
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ingresa el título del libro aquí..."
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ingresa la descripción del libro aquí..."
        />
      </div>

      <button
        type="submit"
        disabled={bookMut.isPending}
        className={`w-full py-2 px-4 rounded-md font-medium ${
          bookMut.isPending
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        } text-white transition-colors`}
      >
        {bookMut.isPending ? 'Enviando...' : 'Crear libro'}
      </button>
      {bookMut.isError && <div>
        Hubo un error desde el servidor... Inténtalo de nuevo, por favor.
      </div>}
    </form>
  )
};

export default BooksForm;
