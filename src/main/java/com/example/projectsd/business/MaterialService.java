package com.example.projectsd.business;

import com.example.projectsd.business.dto.MaterialDTO;
import com.example.projectsd.model.Material;
import com.example.projectsd.model.MaterialCategory;
import com.example.projectsd.model.User;
import com.example.projectsd.repository.MaterialRepository;
import com.example.projectsd.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MaterialService
{
    private final MaterialRepository materialRepository;
    private final UserRepository userRepository;

    @Autowired
    public MaterialService(MaterialRepository materialRepository, UserRepository userRepository)
    {
        this.materialRepository = materialRepository;
        this.userRepository = userRepository;
    }

    /**
     * get all the categories that a material can have
     * @return all categories in a list
     */
    public List<MaterialCategory> getAllCategories()
    {
        return Arrays.asList(MaterialCategory.values());
    }

    /**
     * method to add a file in the database
     * @param newMaterial the new material to be added
     */
    public void uploadMaterial(MaterialDTO newMaterial)
    {

        User user = userRepository.getById(newMaterial.getUserID());

        if(user == null)
        {
            System.err.println("user not found in uploadMaterial");
            return;
        }

        materialRepository.save(new Material(
                newMaterial.getName(),
                newMaterial.getData(),
                newMaterial.getCategory(),
                user,
                new ArrayList<>()
        ));
    }

    /**
     * method to obtain the materials uploaded by a specific user's id
     * @param userID given user id
     * @return list of materials uploaded by that user
     */
    public List<Material> getMaterialsByUser_Id(Integer userID)
    {
        return materialRepository.getMaterialByUser_Id(userID);
    }

    /**
     * method to get all materials from the database
     * @return all the materials as a list
     */
    public List<Material> getAllMaterials()
    {
        return materialRepository.findAll();
    }
}
