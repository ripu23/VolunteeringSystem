package com.vs.VolunteeringSystem.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vs.VolunteeringSystem.Models.Request;

public interface RequestRepository extends MongoRepository<Request, String>{

}
