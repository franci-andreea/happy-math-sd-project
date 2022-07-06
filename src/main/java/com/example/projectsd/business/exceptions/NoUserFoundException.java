package com.example.projectsd.business.exceptions;

public class NoUserFoundException extends Exception
{
    public NoUserFoundException(String errorMessage)
    {
        super(errorMessage);
    }
}
