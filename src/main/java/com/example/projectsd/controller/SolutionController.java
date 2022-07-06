package com.example.projectsd.controller;

import com.example.projectsd.business.SolutionService;
import com.example.projectsd.business.dto.SolutionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SolutionController
{
    private final SolutionService solutionService;

    @Autowired
    public SolutionController(SolutionService solutionService)
    {
        this.solutionService = solutionService;
    }

    @PostMapping("/upload-solutions")
    public ResponseEntity addSolution(@RequestBody SolutionDTO newSolution)
    {
        solutionService.addSolution(newSolution);
        return ResponseEntity.ok().body("SOLUTION CONTROLLER / UPLOAD SOLUTION TO DATABASE - SUCCESSFUL" +
                "OPERATION");
    }

    @GetMapping("/getAllSolutions")
    public ResponseEntity getAllSolutions()
    {
        return ResponseEntity.ok().body(solutionService.getAllSolutions());
    }
}
