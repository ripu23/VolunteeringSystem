package com.vs.VolunteeringSystem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vs.VolunteeringSystem.Models.Request;
import com.vs.VolunteeringSystem.Models.User;
import com.vs.VolunteeringSystem.Repo.RequestRepository;
import com.vs.VolunteeringSystem.services.RequestServer;

@RestController
@RequestMapping("/api/request")
public class RequestController {

	@Autowired
	private RequestRepository requestRepo;
	
	@Autowired
	private RequestServer requestServer;
	
	@GetMapping("/findVolunteers")
	public List<User> getUsersToServe(@RequestParam(value = "currentAddress") String currentAddress,
			@RequestParam(value = "id") String id,
			@RequestParam(value = "toAddress") String toAddress,
			@RequestParam(value = "city") String city,
			@RequestParam(value = "zip") String zip,
			@RequestParam(value = "lat") String lat,
			@RequestParam(value = "lng") String lng){
		Request request = new Request();
//		requestRepo.insert(request);
		return requestServer.findUsersToServe(request);
	}
}
