package com.example.projectsd.model;

import javax.persistence.*;

@Entity
public class Teacher extends User
{
    @Column
    private Integer yearsOfTeaching;

    @Column
    private String school;

    @Column
    private String specializedTopic;

    public Integer getYearsOfTeaching()
    {
        return yearsOfTeaching;
    }

    public void setYearsOfTeaching(Integer yearsOfTeaching)
    {
        this.yearsOfTeaching = yearsOfTeaching;
    }

    public String getSchool()
    {
        return school;
    }

    public void setSchool(String school)
    {
        this.school = school;
    }

    public String getSpecializedTopic()
    {
        return specializedTopic;
    }

    public void setSpecializedTopic(String specializedTopic)
    {
        this.specializedTopic = specializedTopic;
    }
}
