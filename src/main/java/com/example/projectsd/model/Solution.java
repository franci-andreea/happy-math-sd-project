package com.example.projectsd.model;

import javax.persistence.*;

@Entity
public class Solution
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private String content;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user; //foreign key to the student that has uploaded the solution

    @ManyToOne
    @JoinColumn(name = "problem_id", referencedColumnName = "id")
    private Problem problem; //foreign key to the problem that has received the solution

    public Solution() {}

    public Solution(String name, String content, User user, Problem problem)
    {
        this.name = name;
        this.content = content;
        this.user = user;
        this.problem = problem;
    }

    public Integer getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public User getUser()
    {
        return user;
    }

    public Problem getProblem()
    {
        return problem;
    }
}
