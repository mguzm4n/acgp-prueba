package com.test.Services;

import com.test.Entities.Book;
import com.test.Repositories.BookRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;
    public Book createBook(String title, String authorName, String description) {
        var book = new Book(
            null,
            authorName,
            title,
            description,
            null,
            null
        );

        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}
