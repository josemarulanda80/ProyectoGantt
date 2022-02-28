import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ExampleComponent } from './example/example.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [HomeComponent, ExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RecurrenceEditorModule,
    ScheduleModule,
    ComponentsModule
  ],
  providers: [
  ],
  exports: [HomeComponent, ExampleComponent]
})
export class PagesModule { }
