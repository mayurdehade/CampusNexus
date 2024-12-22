package com.campus.services;

import com.campus.entity.JobApplication;
import com.campus.enums.ApplicationStatus;
import com.campus.model.JobApplicationResponse;
import com.campus.repository.JobApplicationRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.stream.Collectors;
import java.time.LocalDateTime;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    // Student applies for a job
    @Transactional
    public JobApplication applyForJob(Long studentRegisterNo, Long jobPostingId) {
        // Check if the student has already applied for the job
        if (jobApplicationRepository.existsByStudentRegisterNoAndJobPostingId(studentRegisterNo, jobPostingId)) {
            throw new IllegalArgumentException("Student has already applied for this job.");
        }
        JobApplication application = new JobApplication();
        application.setStudentRegisterNo(studentRegisterNo);
        application.setJobPostingId(jobPostingId);
        application.setStatus(ApplicationStatus.APPLIED);
        application.setAppliedAt(LocalDateTime.now());
        return jobApplicationRepository.save(application);
    }

    // Retrieve all applications submitted by a specific student
    public List<JobApplicationResponse> getApplicationsByStudent(Long studentRegisterNo) {
        List<JobApplication> applications = jobApplicationRepository.findByStudentRegisterNo(studentRegisterNo);
        return applications.stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    // Fetch applications by job posting ID
    public List<JobApplicationResponse> getApplicationsByJob(Long jobPostingId) {
        List<JobApplication> applications = jobApplicationRepository.findByJobPostingId(jobPostingId);
        return applications.stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    // Update application status
    // Method to update application status
    public JobApplicationResponse updateApplicationStatus(Long applicationId, ApplicationStatus newStatus) throws NotFoundException {
        // Fetch the application by ID
        JobApplication application = jobApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new NotFoundException("Job application not found with ID: " + applicationId));
        // Update the status and the timestamp
        application.setStatus(newStatus);
        application.setUpdatedAt(LocalDateTime.now());
        // Save the updated application
        JobApplication updatedApplication = jobApplicationRepository.save(application);
        // Map to response object
        return mapToResponse(updatedApplication);
    }



    // Export all job applications to Excel
    public byte[] exportApplicationsToExcel() throws Exception {
        List<JobApplication> applications = jobApplicationRepository.findAll();

        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Job Applications");

        // Header row
        Row headerRow = sheet.createRow(0);
        String[] headers = {"Application ID", "Student Register No", "Student Name", "Email", "Job Posting ID", "Status", "Applied At", "Updated At"};
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        // Data rows
        int rowNum = 1;
        for (JobApplication application : applications) {
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(application.getId());
            row.createCell(1).setCellValue(application.getStudentRegisterNo());
            // Fetch additional student details (mocked here; replace with actual data)
            row.createCell(2).setCellValue("Student Name"); // Replace with actual student name
            row.createCell(3).setCellValue("student@example.com"); // Replace with actual student email
            row.createCell(4).setCellValue(application.getJobPostingId());
            row.createCell(5).setCellValue(application.getStatus().toString());
            row.createCell(6).setCellValue(application.getAppliedAt().toString());
            row.createCell(7).setCellValue(application.getUpdatedAt() != null ? application.getUpdatedAt().toString() : "");
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();
        return outputStream.toByteArray();
    }

    // Fetch applications by job posting ID and export details to Excel
    public byte[] exportApplicationsByJobToExcel(Long jobPostingId) throws Exception {
        List<JobApplication> applications = jobApplicationRepository.findByJobPostingId(jobPostingId);

        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Job Applications - Job ID " + jobPostingId);

        // Header row
        Row headerRow = sheet.createRow(0);
        String[] headers = {"Application ID", "Student Register No", "Student Name", "Email", "Job Posting ID", "Status", "Applied At", "Updated At"};
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        // Data rows
        int rowNum = 1;
        for (JobApplication application : applications) {
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(application.getId());
            row.createCell(1).setCellValue(application.getStudentRegisterNo());
            // Fetch additional student details (mocked here; replace with actual data)
            row.createCell(2).setCellValue("Student Name"); // Replace with actual student name
            row.createCell(3).setCellValue("student@example.com"); // Replace with actual student email
            row.createCell(4).setCellValue(application.getJobPostingId());
            row.createCell(5).setCellValue(application.getStatus().toString());
            row.createCell(6).setCellValue(application.getAppliedAt().toString());
            row.createCell(7).setCellValue(application.getUpdatedAt() != null ? application.getUpdatedAt().toString() : "");
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();
        return outputStream.toByteArray();
    }

    // Map JobApplication entity to response model
    private JobApplicationResponse mapToResponse(JobApplication application) {
        JobApplicationResponse response = new JobApplicationResponse();
        response.setApplicationId(application.getId());
        response.setStudentRegisterNo(application.getStudentRegisterNo());
        response.setJobPostingId(application.getJobPostingId());
        response.setStatus(application.getStatus());
        response.setAppliedAt(application.getAppliedAt());
        response.setUpdatedAt(application.getUpdatedAt());
        return response;
    }
}
