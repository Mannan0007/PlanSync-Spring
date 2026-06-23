import { F } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-individual-task',
  standalone: false,
  templateUrl: './individual-task.html',
  styleUrl: './individual-task.css'
})
export class IndividualTask {
  name: any;
  upcomingTask: boolean = false
  showModal: boolean = false;

  taskData: any



  addingTask = new FormGroup({
    task: new FormControl('', { validators: [Validators.required] }),
    flag: new FormControl('', { validators: [Validators.required] })
  })

  ngOnInit() {
    const username = sessionStorage.getItem('userInfo');
    if (username) {
      this.name = JSON.parse(username)
    }
  }
  AddTaskToList() {
    if (this.addingTask.invalid) {
      alert('dikkat')
      return;
    }
    this.taskData = this.addingTask.value;
    this.closeModal()
    // console.log(this.taskData)
  }
  AddTask() {
    this.showModal = true;
    // console.log(this.showModal)
  }

  closeModal() {
    this.showModal = false;
  }

}
