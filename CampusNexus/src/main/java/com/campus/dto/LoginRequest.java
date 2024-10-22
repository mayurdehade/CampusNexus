package com.campus.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class LoginRequest {

    private String email;
    private String password;
}
