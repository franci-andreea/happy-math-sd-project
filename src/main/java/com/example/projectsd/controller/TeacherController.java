package com.example.projectsd.controller;

import com.example.projectsd.business.TeacherService;
import com.example.projectsd.business.exceptions.InvalidFieldException;
import com.example.projectsd.business.exceptions.UsernameAlreadyExistsException;
import com.example.projectsd.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;

@RestController
public class TeacherController
{
    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService)
    {
        this.teacherService = teacherService;
    }

    @PostMapping("/register-teacher")
    public ResponseEntity registerTeacher(@RequestBody Teacher newTeacher)
    {
        try
        {
            teacherService.register(newTeacher);
            return ResponseEntity.status(HttpStatus.OK).body("TEACHER CONTROLLER / REGISTER TEACHER - SUCCESSFUL USER REGISTRATION");
        }
        catch (NoSuchAlgorithmException | InvalidFieldException | UsernameAlreadyExistsException e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
        }
    }
}
