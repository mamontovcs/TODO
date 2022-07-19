import { Component, OnInit } from '@angular/core';
import { TaskService } from '../infrastructure/services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onGetTasks(): Array<Task>{
   return this.taskService.getTasks();
  }

}
