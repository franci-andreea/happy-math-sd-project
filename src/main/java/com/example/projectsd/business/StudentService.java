package com.example.projectsd.business;

import com.example.projectsd.business.exceptions.InvalidFieldException;
import com.example.projectsd.business.exceptions.UsernameAlreadyExistsException;
import com.example.projectsd.business.validators.RegisterValidator;
import com.example.projectsd.model.Student;
import com.example.projectsd.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

//TODO
/**
 * USE CASES FOR STUDENT TO IMPLEMENT
 * register
 * view all the materials uploaded
 * select a material
 * view all problems for that specific material
 * add (upload) one solution to a problem
 * view comments on the uploaded solution
 * leave comment on the solution
 */

@Service
public class StudentService
{
    private final StudentRepository studentRepository;
    private final UserService userService;

    public StudentService(StudentRepository studentRepository, UserService userService)
    {
        this.studentRepository = studentRepository;
        this.userService = userService;
    }

    public boolean checkRegisterFields(Student newStudent)
    {
        RegisterValidator validator = RegisterValidator.getInstance();

        if((validator.checkUsername(newStudent.getUsername()) &&
            validator.checkEmail(newStudent.getEmail())) &&
           (validator.checkNameField(newStudent.getFirstName()) &&
            validator.checkNameField(newStudent.getLastName())) &&
           (validator.checkForNonEmptyField(newStudent.getPassword()) &&
            validator.checkForNonEmptyField(newStudent.getYearOfStudy())))
        {
            return true;
        }

        return false;
    }

    public void register(Student newStudent) throws NoSuchAlgorithmException, InvalidFieldException, UsernameAlreadyExistsException
    {
        //validate all the fields
        //check for uniqueness of the username
        //save the user in the database

        if(checkRegisterFields(newStudent))
        {
            if(userService.findByUsername(newStudent.getUsername()) == null)
            {
                //no user found having this username, can save it in the database

                String encodedPassword = RegisterService.encodePassword(newStudent.getPassword());
                newStudent.setPassword(encodedPassword);

                studentRepository.save(newStudent);

                System.out.println("STUDENT SERVICE - STUDENT ADDED TO THE DATABASE");
            }
            else
                throw new UsernameAlreadyExistsException("STUDENT SERVICE - CANNOT SAVE STUDENT WITH AN EXISTING USERNAME");
        }
        else
            throw new InvalidFieldException("STUDENT SERVICE - SOME FIELD(S) ARE NOT COMPLETED WITH CORRECT INFORMATION");
    }

    public List<Student> getAllStudents()
    {
        return studentRepository.findAll();
    }
}
