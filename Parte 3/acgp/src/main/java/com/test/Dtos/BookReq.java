package com.test.Dtos;

import lombok.Data;

@Data
public class BookReq {
    private String authorName;
    private String title;
    private String description;
}
