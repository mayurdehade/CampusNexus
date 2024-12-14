package com.campus.services;

import com.campus.entity.User;
import com.campus.model.LoginRequest;
import com.campus.model.UserResponse;
import com.campus.repository.UserRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public ResponseEntity<?> userAuthentication(LoginRequest loginRequest) {
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findByEmail(loginRequest.getEmail()));
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user not found");
        }
        User user = optionalUser.get();
        boolean isPasswordMatch = user.getPassword().equals(loginRequest.getPassword());
        if(!isPasswordMatch) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid password");
        }
        return ResponseEntity.ok(new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getRole()));
    }


    public ResponseEntity<User> createUser(User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    public ResponseEntity<User> updateUser(User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    public ResponseEntity<String> deleteUser(long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("User deleted successfully");
    }

    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }
}
