package com.vs.VolunteeringSystem.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.vs.VolunteeringSystem.Repo.UserRepository;

@EnableMongoRepositories(basePackageClasses= UserRepository.class)
@Configuration
public class MongoDBConfig {

}
