package com.example.projectsd.business.exceptions;

public class UsernameAlreadyExistsException extends Exception
{
    public UsernameAlreadyExistsException(String errorMessage)
    {
        super(errorMessage);
    }
}
