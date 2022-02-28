import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';;
import { EventSettingsModel, View, GroupModel } from '@syncfusion/ej2-angular-schedule'
import { ResourceDetails } from '@syncfusion/ej2-angular-schedule';
import { IDUser } from 'src/app/interfaces/gantt.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleComponent  {
  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent;
  //Datos del tecnico como entrada
  @Input() Employes:IDUser[]=[];
  constructor(){}
//  public data: Record<string, any>[] = extend([], blockData, null, true) as Record<string, any>[];
//fecha de hoy
  public selectedDate: Date = new Date();
 // https://ej2.syncfusion.com/angular/demos/#/material/schedule/block-events
  public currentView: View = 'TimelineDay';
  public group: GroupModel = { enableCompactView: false, resources: ['Employee'] };
  public allowMultiple = false;
  public eventSettings: EventSettingsModel


  public getEmployeeName(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
  }
}
