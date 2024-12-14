package com.campus.services;

import com.campus.entity.Student;
import com.campus.enums.UserRoles;
import com.campus.model.LoginRequest;
import com.campus.model.RegisterStudentReq;
import com.campus.model.UserResponse;
import com.campus.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public ResponseEntity<?> studentAuthentication(LoginRequest loginRequest) {
        Optional<Student> optionalStudent = studentRepository.findByEmail(loginRequest.getEmail());
        if(optionalStudent.isEmpty()) { //no student found
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("student not found");
        }
        Student student = optionalStudent.get();
        if(!student.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid password"); //invalid password
        }
        return ResponseEntity.ok(new UserResponse(student.getId(), student.getFullName(), student.getEmail(), UserRoles.STUDENT));
    }

    //create student
    public Student addStudent(RegisterStudentReq req) {
        Student student = new Student();
        student.setRegister_id(req.getRegister_id());
        student.setFullName(req.getFullName());
        student.setEmail(req.getEmail());
        student.setMobile(req.getMobile());
        student.setPassword(req.getPassword());
        student.setStreams(req.getStreams());
        return studentRepository.save(student);
    }

    public Student getStudentById(long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Student not found with id " + id));
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student updateStudent(int id, Student student) {
        Student existingStudent = getStudentById(id);
        existingStudent.setFullName(student.getFullName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setMobile(student.getMobile());
        existingStudent.setPassword(student.getPassword());
        existingStudent.setStreams(student.getStreams());
        existingStudent.setImage(student.getImage());
        existingStudent.setResume(student.getResume());
        return studentRepository.save(existingStudent);
    }

    public void deleteStudent(long id) {
        studentRepository.deleteById(id);
    }


}
