package com.noky.backend.service;

import org.springframework.stereotype.Service;

import com.noky.backend.model.User;
import com.noky.backend.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean registerUser(String username, String password, )

    public String login(String username, String password) {

        try {
            User user = userRepository.login(username, password);

            if (user != null) {
                return "로그인 성공";
            } else {
                return "로그인 실패";
            }
        } catch (Exception e) {
            return "로그인 중 오류 발생";
        }
    }
}
