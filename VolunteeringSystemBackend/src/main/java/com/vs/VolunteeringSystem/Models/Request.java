package com.vs.VolunteeringSystem.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "Request")
public class Request {

	@Id
	private String id;
	private String currentAddress;
	private String toAddress;
	private String city;
	private String zip;
	private String lat;
	private String lng;
	
	public Request() {
		
	}
	
	public Request(String currentAddress, String toAddress, String city, String zip, String lat, String lng) {
		super();
		this.currentAddress = currentAddress;
		this.toAddress = toAddress;
		this.city = city;
		this.zip = zip;
		this.lat = lat;
		this.lng = lng;
	}
	
	public String getCurrentAddress() {
		return currentAddress;
	}
	public void setCurrentAddress(String currentAddress) {
		this.currentAddress = currentAddress;
	}
	public String getToAddress() {
		return toAddress;
	}
	public void setToAddress(String toAddress) {
		this.toAddress = toAddress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	
}
