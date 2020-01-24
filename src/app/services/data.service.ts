import { Injectable } from "@angular/core";
import { Form } from "./../models/form.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public taskList: Form[] = [
    {
      id: 1,
      title: "Daily",
      description: "Daily Task",
      category: "Work",
      label: "Travel"
    },
    {
      id: 2,
      title: "Weekly",
      description: "Weekly Task",
      category: "Personal",
      label: "Groceries"
    }
  ];

  getTask(): Form[] {
    return this.taskList;
  }
  save(task: Form): void {
    this.taskList.push(task);
  }
  deleteTask(task): void {
    const i = this.taskList.findIndex(tasklist => tasklist.id === task.id);
    if (i !== -1) {
      this.taskList.splice(i, 1);
    }
  }
}
