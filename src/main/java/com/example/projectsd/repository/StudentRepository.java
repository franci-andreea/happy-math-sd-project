package com.example.projectsd.repository;

import com.example.projectsd.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>
{
    boolean existsByUsernameAndPassword(String username, String password);
    List<Student> findAll();
    Student findByUsername(String username);
}
