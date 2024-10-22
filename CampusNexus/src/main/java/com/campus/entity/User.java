package com.campus.entity;

import com.campus.enums.UserRoles;
import lombok.Data;

import javax.persistence.*;

//for admin and coordinator
@Entity
@Table(name="user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;
    String email;
    String password;
    UserRoles role;

}
