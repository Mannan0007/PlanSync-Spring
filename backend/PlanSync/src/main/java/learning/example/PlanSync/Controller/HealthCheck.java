package learning.example.PlanSync.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheck {
    @GetMapping("/Health-check")
    public String healthCheck(){
        return "App is running";
    }
}
