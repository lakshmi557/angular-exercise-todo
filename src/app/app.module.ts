import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { reducers, metaReducers } from "./reducers";
import Effects from "./effects/index";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { DataService } from "./services/data.service";

const appRoutes: Routes = [
  { path: "form", component: FormComponent },
  { path: "table", component: TableComponent },
  { path: "", redirectTo: "form", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, FormComponent, TableComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot(Effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
