package com.example.projectsd.business;

import com.example.projectsd.business.dto.SolutionDTO;
import com.example.projectsd.model.Problem;
import com.example.projectsd.model.Solution;
import com.example.projectsd.model.User;
import com.example.projectsd.repository.MaterialRepository;
import com.example.projectsd.repository.ProblemRepository;
import com.example.projectsd.repository.SolutionRepository;
import com.example.projectsd.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolutionService
{
    private final SolutionRepository solutionRepository;
    private final UserRepository userRepository;
    private final ProblemRepository problemRepository;

    @Autowired
    public SolutionService(SolutionRepository solutionRepository, UserRepository userRepository, ProblemRepository problemRepository)
    {
        this.solutionRepository = solutionRepository;
        this.userRepository = userRepository;
        this.problemRepository = problemRepository;
    }

    public void addSolution(SolutionDTO newSolution)
    {
        User user = userRepository.getById(newSolution.getUserID());
        Problem problem = problemRepository.getById(newSolution.getProblemID());

        if(user == null || problem == null)
        {
            System.err.println("no user found or no problem found by id");
            return;
        }

        solutionRepository.save(new Solution(
                newSolution.getName(),
                newSolution.getContent(),
                user,
                problem
        ));
    }

    public List<Solution> getAllSolutions()
    {
        return solutionRepository.findAll();
    }
}
