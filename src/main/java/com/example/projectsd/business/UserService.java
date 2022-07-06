package com.example.projectsd.business;

import com.example.projectsd.business.exceptions.NoUserFoundException;
import com.example.projectsd.model.User;
import com.example.projectsd.repository.StudentRepository;
import com.example.projectsd.repository.TeacherRepository;
import com.example.projectsd.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;

/**
 * USE CASES FOR A USER (in general)
 * login
 * logout
 */

@Service
public class UserService
{
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;

    public UserService(UserRepository userRepository, StudentRepository studentRepository, TeacherRepository teacherRepository)
    {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
    }

    public User returnUserAfterLogin(String username, String password) throws NoUserFoundException, NoSuchAlgorithmException
    {
        String encodedPassword = RegisterService.encodePassword(password);

        if(studentRepository.existsByUsernameAndPassword(username, encodedPassword))
        {
            return studentRepository.findByUsername(username);
        }
        else if(teacherRepository.existsByUsernameAndPassword(username, encodedPassword))
        {
            return teacherRepository.findByUsername(username);
        }
        else
            throw new NoUserFoundException("No user having username \"" + username + "\" was found");
    }

    public User findByUsername(String username)
    {
        return userRepository.findByUsername(username);
    }
}
