package com.test.Controllers;

import com.test.Dtos.BookReq;
import com.test.Entities.Book;
import com.test.Services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/books")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody BookReq req) {
        var created = bookService.createBook(
            req.getTitle(),
            req.getAuthorName(),
            req.getDescription()
        );

        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(created);
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        var books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }
}
