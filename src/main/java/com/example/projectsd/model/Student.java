package com.example.projectsd.model;

import javax.persistence.*;

@Entity
public class Student extends User
{
    @Column
    private String yearOfStudy;

    @Column
    private String email;

    public Student() {}

    public String getYearOfStudy()
    {
        return yearOfStudy;
    }

    public void setYearOfStudy(String yearOfStudy)
    {
        this.yearOfStudy = yearOfStudy;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }
}
