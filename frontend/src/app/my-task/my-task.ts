import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Api } from '../services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-task',
  standalone: false,
  templateUrl: './my-task.html',
  styleUrl: './my-task.css'
})
export class MyTask {
  @ViewChild('addTaskModal') addTaskModal!: TemplateRef<any>
  modalOpen: any = false;
  hasDeadline: any = false;
  deadline: any = '';
  userId: any = '';
  tasks: any[] = [];
  aboutTask: boolean = false;
  constructor(private API: Api, private modalService: NgbModal) { };

  TaskAddition = new FormGroup({
    task: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startDate: new FormControl(''),
    endtDate: new FormControl(''),
    deadline: new FormControl('No')

  })
  ngOnInit() {
    const userDetails = sessionStorage.getItem('userInfo');
    if (userDetails) {
      const parsedUser = JSON.parse(userDetails);
      this.userId = parsedUser?.user?.id
    }
    console.log("here", this.userId);
    this.getAllTask();
  }

  addTask() {
    console.log('clcikefd')
    const payload = {
      userId: this.userId,
      title: this.TaskAddition.value.title,
      description: this.TaskAddition.value.description,
      // category: this.TaskAddition.value.category,
      // startDate: this.TaskAddition.value.startDate,
      // endDate: this.TaskAddition.value.endtDate
    }

    this.API.addTask(payload).subscribe({
      next: (res) => {
        console.log("Task added successfully", res);
        alert("Task added successfully ✅");
        this.TaskAddition.reset();
      },
      error: (err) => {
        console.error("Error adding task", err);
        alert("Failed to add task ❌");
      }
    })
  }

  getAllTask() {
    // if (!this.userId) {
    //   return;
    // }

    this.API.getTask(this.userId).subscribe({
      next: (res: any) => {
        this.tasks = res.tasks;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  selectedTask: any;

  openTaskDetails(task: any) {
    this.selectedTask = task;
    this.aboutTask = true;
  }
  onDeadlineChange(value: string) {
    this.hasDeadline = value === 'Yes';
  }

  AddTask() {
    console.log(this.TaskAddition.value)
  }
  closeBreif() {
    this.aboutTask = false;
  }


  openTaskModal() {
    this.modalService.open(this.addTaskModal, { windowClass: 'ed-modal', backdrop: 'static', keyboard: false, centered: true })
  }

  closeModal() {
    this.modalService.dismissAll();
    this.deadline = '';
    this.hasDeadline = false;
    this.TaskAddition.reset();

  }
}
