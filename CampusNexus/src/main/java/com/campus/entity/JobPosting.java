package com.campus.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "job_postings")
@Data
@AllArgsConstructor
public class JobPosting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String jobTitle;
    private String companyName;
    private String jobDescription;
    private String jobLocation;
    private String eligibilityCriteria;
    private String company_url;
    private String ctc;
}
