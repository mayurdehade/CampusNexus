package com.campus.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "student")
@Data
@AllArgsConstructor
public class Student {
    @Id
    private long register_id;
    private String fullName;
    private String email;
    private long mobile;
    private String password;
    private int rolNo;

    //resume
    @Lob
    private byte[] resume;

    //profile image
    @Column(columnDefinition = "LONGBLOB")
    private byte[] image;


}
