package com.campus.services;

import com.campus.entity.User;
import com.campus.enums.UserRoles;
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


    // Ensure there is always one default admin
    public void createDefaultAdmin() {
        if (userRepository.findByRole(UserRoles.ADMIN).isEmpty()) {
            User admin = new User();
            admin.setName("Default Admin");
            admin.setEmail("admin@example.com");
            admin.setPassword("admin@123"); // This should be hashed in production
            admin.setRole(UserRoles.ADMIN);
            admin.setVarified(true); // Admins are always verified
            userRepository.save(admin);
        }
    }

    // Register a coordinator
    public User registerCoordinator(User coordinator) {
        coordinator.setRole(UserRoles.COORDINATOR);
        coordinator.setVarified(false); // Default to not verified
        return userRepository.save(coordinator);
    }

    // Verify coordinator
    public User verifyCoordinator(Long id) {
        Optional<User> optionalCoordinator = userRepository.findById(id);
        if (optionalCoordinator.isPresent()) {
            User coordinator = optionalCoordinator.get();
            if (coordinator.getRole() == UserRoles.COORDINATOR) {
                coordinator.setVarified(true);
                return userRepository.save(coordinator);
            } else {
                throw new IllegalArgumentException("User is not a coordinator");
            }
        }
        throw new IllegalArgumentException("Coordinator not found");
    }

    // Update user (admin or coordinator)
    public User updateUser(Long id, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setName(updatedUser.getName());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            return userRepository.save(user);
        }
        throw new IllegalArgumentException("User not found");
    }

    // Delete coordinator
    public void deleteCoordinator(Long id) {
        Optional<User> optionalCoordinator = userRepository.findById(id);
        if (optionalCoordinator.isPresent() && optionalCoordinator.get().getRole() == UserRoles.COORDINATOR) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Coordinator not found or is not a coordinator");
        }
    }

    // Get all coordinators
    public List<User> getAllCoordinators() {
        return userRepository.findByRole(UserRoles.COORDINATOR);
    }
}
