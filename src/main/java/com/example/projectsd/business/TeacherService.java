package com.example.projectsd.business;

import com.example.projectsd.business.exceptions.InvalidFieldException;
import com.example.projectsd.business.exceptions.UsernameAlreadyExistsException;
import com.example.projectsd.business.validators.RegisterValidator;
import com.example.projectsd.model.Student;
import com.example.projectsd.model.Teacher;
import com.example.projectsd.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;

//TODO
/**
 * USE CASES FOR TEACHER TO IMPLEMENT
 * view all the materials uploaded
 * view materials based on the category
 * add (upload) material to the material list
 * view problems according to the material selected
 * add problem to the problems list
 * view solutions uploaded
 * leave comment on the solution
 */

@Service
public class TeacherService
{
    private final TeacherRepository teacherRepository;
    private final UserService userService;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository, UserService userService)
    {
        this.teacherRepository = teacherRepository;
        this.userService = userService;
    }

    public boolean checkRegisterFields(Teacher newTeacher)
    {
        RegisterValidator validator = RegisterValidator.getInstance();

        if((validator.checkUsername(newTeacher.getUsername()) &&
            validator.checkNameField(newTeacher.getFirstName())) &&
           (validator.checkNameField(newTeacher.getLastName()) &&
            validator.checkNumberField(newTeacher.getYearsOfTeaching().toString())) &&
           (validator.checkForNonEmptyField(newTeacher.getSchool())) &&
            validator.checkForNonEmptyField(newTeacher.getSpecializedTopic()))
        {
            return true;
        }

        return false;
    }

    public void register(Teacher newTeacher) throws NoSuchAlgorithmException, InvalidFieldException, UsernameAlreadyExistsException
    {
        //validate all the fields
        //check for uniqueness of the username
        //save the user in the database

        if(checkRegisterFields(newTeacher))
        {
            if(userService.findByUsername(newTeacher.getUsername()) == null)
            {
                //no user found having this username, can save it in the database

                String encodedPassword = RegisterService.encodePassword(newTeacher.getPassword());
                newTeacher.setPassword(encodedPassword);

                teacherRepository.save(newTeacher);

                System.out.println("TEACHER SERVICE - TEACHER ADDED TO THE DATABASE");
            }
            else
                throw new UsernameAlreadyExistsException("TEACHER SERVICE - CANNOT SAVE TEACHER WITH AN EXISTING USERNAME");
        }
        else
            throw new InvalidFieldException("TEACHER SERVICE - CANNOT SAVE TEACHER AS SOME FIELD(S) ARE NOT COMPLETED WITH CORRECT " +
                    "INFORMATION");
    }
}
