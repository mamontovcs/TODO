import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../infrastructure/services/task.service';
import { SelectStatusComponent } from '../shared/select-status/select-status.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskName: string = '';
  taskNotes: string = '';
  taskStatus: string = '';

  @ViewChild(SelectStatusComponent) selectStatusComponent!: SelectStatusComponent;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onTaskCreate(){
    this.taskService.addTask(this.taskName, this.taskStatus, this.taskNotes);
    this.ClearData();
    
    console.log(this.taskService.getTasks());
  }

  onStatusChange(eventData: {selectedStatus: string}){
    this.taskStatus = eventData.selectedStatus;
  }

  private ClearData(){
    this.selectStatusComponent.setStatusToDefault();
    this.taskName = '';
    this.taskStatus = '';
    this.taskNotes = '';
  }
}
