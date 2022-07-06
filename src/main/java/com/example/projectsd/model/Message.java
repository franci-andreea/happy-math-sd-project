package com.example.projectsd.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Message
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String message;

    @Column
    private Date sentTime;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User sender; //foreign key to the user that sent the message

    @ManyToOne
    @JoinColumn(name = "solution_id", referencedColumnName = "id")
    private Solution solution; //foreign key to the solution under which the discussion started
}
