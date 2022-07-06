package com.example.projectsd.business;

import com.example.projectsd.business.dto.ProblemDTO;
import com.example.projectsd.model.Material;
import com.example.projectsd.model.Problem;
import com.example.projectsd.model.User;
import com.example.projectsd.repository.MaterialRepository;
import com.example.projectsd.repository.ProblemRepository;
import com.example.projectsd.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService
{
    private final ProblemRepository problemRepository;
    private final UserRepository userRepository;
    private final MaterialRepository materialRepository;

    @Autowired
    public ProblemService(ProblemRepository problemRepository, UserRepository userRepository, MaterialRepository materialRepository)
    {
        this.problemRepository = problemRepository;
        this.userRepository = userRepository;
        this.materialRepository = materialRepository;
    }

    public void addProblem(ProblemDTO newProblem)
    {
        User user = userRepository.getById(newProblem.getUserID());
        Material material = materialRepository.getById(newProblem.getMaterialID());

        if(user == null || material == null)
        {
            System.err.println("no user found or no material found by id");
            return;
        }

        problemRepository.save(new Problem(
                newProblem.getName(),
                newProblem.getText(),
                material,
                user
        ));
    }

    public List<Problem> getProblemsByCurrentMaterial(Integer materialID)
    {
        return problemRepository.getProblemsByMaterial_Id(materialID);
    }
}
