package com.campus.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String fullName;
    private String email;
    private long mobile;
    private String password;
    private int rolNo;
}
