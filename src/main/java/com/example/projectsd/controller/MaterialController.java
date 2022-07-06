package com.example.projectsd.controller;

import com.example.projectsd.business.MaterialService;
import com.example.projectsd.business.dto.MaterialDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MaterialController
{
    private final MaterialService materialService;

    @Autowired
    public MaterialController(MaterialService materialService)
    {
        this.materialService = materialService;
    }

    @GetMapping("/getCategories")
    public ResponseEntity getAllCategories()
    {
        return ResponseEntity.ok().body(materialService.getAllCategories());
    }

    @PostMapping("/upload-materials")
    public ResponseEntity uploadMaterial(@RequestBody MaterialDTO newMaterial)
    {
        materialService.uploadMaterial(newMaterial);
        return ResponseEntity.status(HttpStatus.OK).body("MATERIAL CONTROLLER / UPLOAD MATERIAL TO DATABASE - SUCCESSFUL" +
                "OPERATION");
    }

    @PostMapping("/getMaterials")
    public ResponseEntity getMaterialsByUser(@RequestBody Integer id)
    {
        return ResponseEntity.ok().body(materialService.getMaterialsByUser_Id(id));
    }

    @GetMapping("/getAllMaterials")
    public ResponseEntity getAllMaterials()
    {
        return ResponseEntity.ok().body(materialService.getAllMaterials());
    }
}
