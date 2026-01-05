package com.kingdom_hearts_ecommerce.service;

import com.kingdom_hearts_ecommerce.model.User;
import com.kingdom_hearts_ecommerce.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
        this.passwordEncoder= new BCryptPasswordEncoder();
    }

    public User registerUser(String username, String password){
        String passwordEncrypted = passwordEncoder.encode(password);
        User user = new User(username, passwordEncrypted);
        return userRepository.save(user);
    }

    public Optional<User> searchByUserName(String username){
        return userRepository.findByUsername(username);
    }
}
