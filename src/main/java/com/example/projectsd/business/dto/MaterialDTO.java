package com.example.projectsd.business.dto;

import com.example.projectsd.model.MaterialCategory;

public class MaterialDTO
{
    private String name;
    private String data;
    private MaterialCategory category;
    private Integer userID;

    public MaterialDTO(String name, String data, MaterialCategory category, Integer userID)
    {
        this.name = name;
        this.data = data;
        this.category = category;
        this.userID = userID;
    }

    public String getName()
    {
        return name;
    }

    public String getData()
    {
        return data;
    }

    public MaterialCategory getCategory()
    {
        return category;
    }

    public Integer getUserID()
    {
        return userID;
    }
}
