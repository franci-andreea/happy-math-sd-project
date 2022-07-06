package com.example.projectsd.repository;

import com.example.projectsd.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Integer>
{
    List<Problem> getProblemsByMaterial_Id(Integer id);
}
