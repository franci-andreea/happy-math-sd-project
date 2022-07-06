package com.example.projectsd.controller;

import com.example.projectsd.business.TeacherService;
import com.example.projectsd.business.UserService;
import com.example.projectsd.business.dto.LoginDTO;
import com.example.projectsd.business.exceptions.NoUserFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

@RestController
public class UserController
{
    public final UserService userService;
    public final TeacherService teacherService;

    public UserController(UserService userService, TeacherService teacherService)
    {
        this.userService = userService;
        this.teacherService = teacherService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO loginDTO)
    {
        try
        {
            return ResponseEntity.status(HttpStatus.OK).body(userService.returnUserAfterLogin(loginDTO.getUsername(), loginDTO.getPassword()));
        }
        catch (NoUserFoundException | NoSuchAlgorithmException e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }
}
