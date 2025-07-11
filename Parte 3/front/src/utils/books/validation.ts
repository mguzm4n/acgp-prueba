import type { ValidationErrs } from "./types";

const validateField = (name: string, value: string): string | undefined => {
  if (!value.trim()) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
  }
  if (value.trim().length < 2) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least 2 characters long`;
  }
  return undefined;
};

export function validateForm(formData: FormData): ValidationErrs {
  const newErrors: ValidationErrs = {};
  
  const authorName = formData.get('authorName') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  const authorError = validateField('authorName', authorName);
  const titleError = validateField('title', title);
  const descriptionError = validateField('description', description);

  if (authorError) newErrors.authorName = authorError;
  if (titleError) newErrors.title = titleError;
  if (descriptionError) newErrors.description = descriptionError;

  return newErrors;
};