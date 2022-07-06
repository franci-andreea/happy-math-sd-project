package com.example.projectsd.model;

import javax.persistence.*;

import java.util.List;

@Entity
public class Material
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name; //name given by the teacher when added to the database to make the search easier

    @Column
    private String data; //content

    @Column
    private MaterialCategory category;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user; //foreign key to the user table to access afterwards the teacher

    @OneToMany
    @JoinColumn(name = "material_id", referencedColumnName = "id")
    private List<Problem> problems;

    public Material() {}

    public Material(String name, String data, MaterialCategory category, User user, List<Problem> problems)
    {
        this.name = name;
        this.data = data;
        this.category = category;
        this.user = user;
        this.problems = problems;
    }

    public Integer getId()
    {
        return id;
    }

    public void setId(Integer id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getData()
    {
        return data;
    }

    public void setData(String data)
    {
        this.data = data;
    }

    public MaterialCategory getCategory()
    {
        return category;
    }

    public void setCategory(MaterialCategory category)
    {
        this.category = category;
    }

    public void setProblems(List<Problem> problems)
    {
        this.problems = problems;
    }
}
