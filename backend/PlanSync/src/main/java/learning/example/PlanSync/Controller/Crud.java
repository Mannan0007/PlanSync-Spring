package learning.example.PlanSync.Controller;

import learning.example.PlanSync.entity.Task;
import learning.example.PlanSync.repository.TaskRepository;
import learning.example.PlanSync.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Crud {
    @Autowired
    private TaskService taskService;


    //create a new task
    @PostMapping("/addTask")
    public ResponseEntity<Task> addTask(@RequestBody Task task){
        try {
            Task savedTask=taskService.createTask(task);
            return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
