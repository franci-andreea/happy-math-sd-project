package com.example.projectsd.controller;

import com.example.projectsd.business.ProblemService;
import com.example.projectsd.business.dto.ProblemDTO;
import com.example.projectsd.model.Problem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProblemController
{
    private final ProblemService problemService;

    @Autowired
    public ProblemController(ProblemService problemService)
    {
        this.problemService = problemService;
    }

    @PostMapping("/upload-problems")
    public ResponseEntity addProblem(@RequestBody ProblemDTO newProblem)
    {
        problemService.addProblem(newProblem);
        return ResponseEntity.status(HttpStatus.OK).body("PROBLEM CONTROLLER / UPLOAD PROBLEM TO DATABASE - SUCCESSFUL" +
                "OPERATION");
    }

    @PostMapping("/getProblems")
    public ResponseEntity<List<Problem>> getProblemsByCurrentMaterial(@RequestBody Integer id)
    {

        var temp = problemService.getProblemsByCurrentMaterial(id);
        System.out.println("GET PROBLEMS: id: " + id);
        System.out.println(temp);
        return ResponseEntity.ok().body(temp);
    }
}
