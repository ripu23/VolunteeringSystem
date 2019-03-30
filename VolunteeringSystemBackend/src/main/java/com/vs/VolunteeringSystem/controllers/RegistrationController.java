package com.vs.VolunteeringSystem.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vs.VolunteeringSystem.Models.User;
import com.vs.VolunteeringSystem.Repo.UserRepository;

@RestController
@RequestMapping("/api")
public class RegistrationController {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user){
		userRepository.insert(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@RequestMapping("/getAll")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@RequestMapping("/getById/{id}")
	public Optional<User> getUser(@PathVariable String id){
		return userRepository.findById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable String id){
		userRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
