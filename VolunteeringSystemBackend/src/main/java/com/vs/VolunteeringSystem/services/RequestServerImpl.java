package com.vs.VolunteeringSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.vs.VolunteeringSystem.Models.Request;
import com.vs.VolunteeringSystem.Models.User;
import com.vs.VolunteeringSystem.Repo.UserRepository;

@Component
public class RequestServerImpl implements RequestServer{

	@Autowired
	UserRepository userRepo;
	
	@Override
	public List<User> findUsersToServe(Request request) {
		//TODO implement logic
		return userRepo.findAll();
	}

}
