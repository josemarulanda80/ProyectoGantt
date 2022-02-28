import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, AgendaService, DragAndDropService, ResizeService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
//Divido los modulos por carpetas para no tener las importaciones en un solo lugar

@NgModule({
  declarations: [ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleModule,
    RecurrenceEditorModule,
  ],
  providers: [
    DayService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
    AgendaService,
    DragAndDropService,
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ComponentsModule { }
