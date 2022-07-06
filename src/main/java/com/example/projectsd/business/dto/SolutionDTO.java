package com.example.projectsd.business.dto;

public class SolutionDTO
{
    private String name;
    private String content;
    private Integer userID;
    private Integer problemID;

    public SolutionDTO(String name, String content, Integer userID, Integer problemID)
    {
        this.name = name;
        this.content = content;
        this.userID = userID;
        this.problemID = problemID;
    }

    public String getName()
    {
        return name;
    }

    public String getContent()
    {
        return content;
    }

    public Integer getUserID()
    {
        return userID;
    }

    public Integer getProblemID()
    {
        return problemID;
    }
}
