package com.example.projectsd.repository;

import com.example.projectsd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>
{
    User findByUsername(String username);
    boolean existsUserByUsernameAndPassword(String username, String password);
}
