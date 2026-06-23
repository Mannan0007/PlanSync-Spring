package learning.example.PlanSync.service;

import learning.example.PlanSync.entity.Task;
import learning.example.PlanSync.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
private final TaskRepository taskRepository;


    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    public Task createTask(Task task){
        return taskRepository.save(task);
    }
}
