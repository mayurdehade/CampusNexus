package com.campus.controller;

import com.campus.dto.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class AuthController {

    //Student Login
    @PostMapping("/student/login")
    public ResponseEntity<Void> studentLogin(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return ResponseEntity.ok().build();
    }

    //User login
    @PostMapping("/user/login")
    public ResponseEntity<Void> userLogin(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return ResponseEntity.ok().build();
    }

}
