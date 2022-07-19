import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskRepository } from '../repositories/task.repository';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private taskRepository: TaskRepository) { }

  getTasks(): Array<Task>{
    return this.taskRepository.getTasks();
  }

  addTask(name: string, status: string, notes: string){
    let task = new Task(name, status, notes);
    this.taskRepository.addTask(task);
  }
}
