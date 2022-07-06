package com.example.projectsd.model;

import javax.persistence.*;

@Entity
public class Problem
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private String text;

    @ManyToOne
    @JoinColumn(name = "material_id", referencedColumnName = "id")
    private Material material;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user; //foreign key to the teacher that has uploaded this

    public Problem() {}

    public Problem(String name, String text, Material material, User user)
    {
        this.name = name;
        this.text = text;
        this.material = material;
        this.user = user;
    }

    public Integer getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public String getText()
    {
        return text;
    }

    public Material getMaterial()
    {
        return material;
    }

    public User getUser()
    {
        return user;
    }
}
