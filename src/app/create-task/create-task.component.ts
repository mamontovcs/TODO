import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskStatuses: string[] = ['To do', 'In progress', 'Canceled', 'Done'];
  selectedStatus: string = this.taskStatuses[0];

  constructor() { }

  ngOnInit(): void {
  }



}
