package com.vs.VolunteeringSystem.services;

import java.util.List;

import com.vs.VolunteeringSystem.Models.Request;
import com.vs.VolunteeringSystem.Models.User;

public interface RequestServer {

	List<User> findUsersToServe(Request request);
}
