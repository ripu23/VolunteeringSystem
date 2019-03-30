package com.vs.VolunteeringSystem.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vs.VolunteeringSystem.Models.User;

public interface UserRepository extends MongoRepository<User, String>{

}
