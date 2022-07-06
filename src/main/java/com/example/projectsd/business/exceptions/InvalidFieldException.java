package com.example.projectsd.business.exceptions;

public class InvalidFieldException extends Exception
{
    public InvalidFieldException(String errorMessage)
    {
        super(errorMessage);
    }
}
