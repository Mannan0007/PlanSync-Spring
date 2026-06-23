package learning.example.PlanSync.service;

import learning.example.PlanSync.entity.User;
import learning.example.PlanSync.repository.AuthRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
private final AuthRepository authRepository;

public AuthService(AuthRepository authRepository){
    this.authRepository=authRepository;
}
public User registerUser(User user){
    User existingUser=authRepository.findByEmail(user.getEmail());
    if(existingUser!=null){
        throw new RuntimeException("Email already exist");
    }
    return authRepository.save(user);
}
}
