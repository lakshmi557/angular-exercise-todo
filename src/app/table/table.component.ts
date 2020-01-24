import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Form } from "../models/form.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  tasks: Form[];
formValue;
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.tasks = this._dataService.getTask();
  }
  delete(currentTask): void {
    this._dataService.deleteTask(currentTask);
  }
  tabledetails(latestTask): void {
    this.formValue = latestTask;
  }
}
