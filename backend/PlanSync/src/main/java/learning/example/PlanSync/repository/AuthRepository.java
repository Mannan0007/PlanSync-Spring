package learning.example.PlanSync.repository;

import learning.example.PlanSync.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthRepository extends MongoRepository<User,String> {
    User findByEmail(String email);
}
