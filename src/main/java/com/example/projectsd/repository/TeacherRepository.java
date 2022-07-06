package com.example.projectsd.repository;

import com.example.projectsd.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeacherRepository extends JpaRepository<Teacher, Integer>
{
    boolean existsByUsernameAndPassword(String username, String password);
    Teacher findByUsername(String username);
    List<Teacher> findAll();
}
