import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-status',
  templateUrl: './select-status.component.html',
  styleUrls: ['./select-status.component.css']
})
export class SelectStatusComponent implements OnInit {

  protected taskStatuses: string[] = ['To do', 'In progress', 'Canceled', 'Done'];

  @Output() protected statusChanged = new EventEmitter<{selectedStatus: string}>();
  protected selectedStatus: string = '';

  constructor() {
    this.selectedStatus = this.taskStatuses[0]
    this.statusChanged.emit({selectedStatus: this.taskStatuses[0]});
   }

  ngOnInit(): void {
  }

  protected onChanged() {
    this.statusChanged.emit({selectedStatus: this.selectedStatus});
  }

  public setStatusToDefault(){
    this.selectedStatus = this.taskStatuses[0];
  }
}
