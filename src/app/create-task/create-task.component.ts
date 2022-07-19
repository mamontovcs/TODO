import { Component, OnInit } from '@angular/core';
import { TaskService } from '../infrastructure/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskStatuses: string[] = ['To do', 'In progress', 'Canceled', 'Done'];
  selectedStatus: string = this.taskStatuses[0];

  taskName: string = '';
  taskNotes: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onTaskCreate(){
    this.taskService.addTask(this.taskName, this.selectedStatus, this.taskNotes);
    this.ClearData();
    
    console.log(this.taskService.getTasks());
  }

  private ClearData(){
    this.taskName = '';
    this.selectedStatus = this.taskStatuses[0];
    this.taskNotes = '';
  }

}
