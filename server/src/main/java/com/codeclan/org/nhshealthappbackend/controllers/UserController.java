package com.codeclan.org.nhshealthappbackend.controllers;

import com.codeclan.org.nhshealthappbackend.models.User;
import com.codeclan.org.nhshealthappbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
//
//    @GetMapping(value = "/users/{id}")
//    public ResponseEntity getUser(@PathVariable Long id) {
//        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
//    }

    @PostMapping(value = "/")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

//    @PatchMapping(value = "/users/{id}")
//    public ResponseEntity<User> updateUser(@RequestBody User user){
//        userRepository.save(user);
//        return new ResponseEntity<>(user, HttpStatus.OK);
//    }
//
//    @DeleteMapping(value = "/users/{id}")
//    public ResponseEntity<User> deletePirate(@PathVariable Long id) {
//        User found = userRepository.getOne(id);
//        userRepository.delete(found);
//        return new ResponseEntity<>(found, HttpStatus.OK);
//    }
}