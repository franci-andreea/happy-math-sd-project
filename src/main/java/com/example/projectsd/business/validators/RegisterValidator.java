package com.example.projectsd.business.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegisterValidator
{
    /**
     * Here we will include all the validators for the registration fields
     *
     * The fields are:
     *
     * common fields
     * >> username (string, username format)
     * >> password (string)
     * >> first name (string, only letters from a - z, A - Z)
     * >> last name (string, only letters from a - z, A - Z)
     *
     * student fields:
     * >> email (string, email format)
     * >> year of study (number)
     *
     * teacher fields:
     * >> years of teaching (number)
     * >> school name (string, letters and numbers only)
     * >> specialized topic (string, only letters from a - z, A - Z)
     */

    /**
     * CREATIONAL DESIGN PATTERN
     * SINGLETON DESIGN PATTERN IMPLEMENTATION FOR
     * REGISTER VALIDATOR CLASS
     */

    private static RegisterValidator validator;

    private RegisterValidator() {

    }

    public static RegisterValidator getInstance()
    {
        if(validator == null)
            validator = new RegisterValidator();
        return validator;
    }

    /**
     * RULES FOR USERNAME
     * Non-empty field
     * Only allow alphabet and numbers
     * @param username - username inserted by the user
     * @return false - at least one rule is not respected
     *         true - all rules are respected and validation is successful
     */
    public boolean checkUsername(String username)
    {
        String regex = "^[A-Za-z][A-Za-z0-9]*$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(username);

        return !username.isEmpty() && matcher.matches();
    }

    /**
     * RULES FOR EMAIL
     * Non-empty field
     * A-Z characters allowed
     * a-z characters allowed
     * 0-9 numbers allowed
     * Additionally email may contain only dot(.), dash(-) and underscore(_)
     * Rest all characters are not allowed
     * @param email - email introduced by the user
     * @return false - at least one rule is not respected
     *         true - successful validation
     */
    public boolean checkEmail(String email)
    {
        String regex = "^[A-Za-z0-9+_.-]+@(.+)$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(email);

        return !email.isEmpty() && matcher.matches();
    }

    /**
     * RULES FOR NAME FIELDS (FIRST & LAST NAME)
     * Non-empty field
     * only A - Z, a - z characters allowed
     * @param introducedName - name introduced either in the last or in the first name field
     * @return false - at least one rule is not respected
     *         true - successful validation
     */
    public boolean checkNameField(String introducedName)
    {
        String regex = "^[a-zA-Z]+$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(introducedName);

        return !introducedName.isEmpty() && matcher.matches();
    }

    /**
     * RULES FOR NUMBER FIELDS
     * Non-empty field
     * only 0 - 9 characters allowed
     * @param introducedNumber - number introduced in specific fields
     * @return false - at least one rule is not respected
     *         true - successful validation
     */
    public boolean checkNumberField(String introducedNumber)
    {
        String regex = "^[0-9]*$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(introducedNumber);

        return !introducedNumber.isEmpty() && matcher.matches();
    }

    /**
     * Non-empty fields
     * @param introducedString - what the user has introduced in other fields that are supposed to be filled with
     *                           something
     * @return false - the field is not completed or contains the empty string
     *         true - successful validation
     */
    public boolean checkForNonEmptyField(String introducedString)
    {
        return introducedString != null && !introducedString.isEmpty();
    }
}
