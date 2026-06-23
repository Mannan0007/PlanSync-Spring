package learning.example.PlanSync.repository;
import learning.example.PlanSync.entity.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository  extends MongoRepository<Task,String> {
}
