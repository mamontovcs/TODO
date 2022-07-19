import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskRepository {

  tasks: Task[] = [ new Task('123', 'To do', 'notes')];
  constructor() { }

  getTasks(): Array<Task> {
    return this.tasks;
  }

  addTask(task: Task){
    this.tasks.push(task);
  }
}
