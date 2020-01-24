import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { DataService } from "../services/data.service";
import { Form } from "./../models/form.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  label: string;
  private _idValue = 2;
  taskForm: Form = {
    id: null,
    title: null,
    description: null,
    category: null,
    label: null
  };
  categories = [{ id: 1, name: "Work" }, { id: 2, name: "Personal" }];
  listofTasks: Form[];
  constructor(private _dataService: DataService, private _router: Router) {}
  ngOnInit() {
    this.label = null;
  }
  saveDetails(formvalues: NgForm): void {
    if (formvalues.value.category === '1') {
      this.taskForm.category = "Work";
      this.taskForm.id = ++this._idValue;
    } else {
      this.taskForm.category = "Personal";
      this.taskForm.id = ++this._idValue;
    }
    const newTask: Form = { ...this.taskForm };
    this._dataService.save(newTask);
    formvalues.reset();
    this._router.navigate(["table"]);
  }
}
