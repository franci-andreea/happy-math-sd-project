package com.example.projectsd.controller;

import com.example.projectsd.business.StudentService;
import com.example.projectsd.business.exceptions.InvalidFieldException;
import com.example.projectsd.business.exceptions.UsernameAlreadyExistsException;
import com.example.projectsd.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;

@RestController
public class StudentController
{
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService)
    {
        this.studentService = studentService;
    }

    @PostMapping("/register-student")
    public ResponseEntity registerStudent(@RequestBody Student newStudent)
    {
        try
        {
            studentService.register(newStudent);
            return ResponseEntity.status(HttpStatus.OK).body("STUDENT CONTROLLER / REGISTER STUDENT - SUCCESSFUL USER" +
                    " REGISTRATION");
        }
        catch (NoSuchAlgorithmException | InvalidFieldException | UsernameAlreadyExistsException e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
        }
    }

    @GetMapping("/getAllStudents")
    public ResponseEntity getAllStudents()
    {
        return ResponseEntity.ok().body(studentService.getAllStudents());
    }
}
