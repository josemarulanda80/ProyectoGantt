import { Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  EventSettingsModel, View, GroupModel, ResourceDetails, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
import { blockData } from 'src/app/data';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent {

  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent;
  public data: Record<string, any>[] = extend([], blockData, null, true) as Record<string, any>[];
  public selectedDate: Date = new Date(2021, 7, 2);
  public currentView: View = 'TimelineDay';
  public employeeDataSource: Record<string, any>[] = [
    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Content writer' },
    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Designer' },
    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Software Engineer' },
    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Support Engineer' },
    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Human Resource' },
    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Content Analyst' }
  ];
  public group: GroupModel = { enableCompactView: false, resources: ['Employee'] };
  public allowMultiple = false;

  //Con esta linea de codigo  se conecta los eventos 
  public eventSettings: EventSettingsModel = { dataSource: this.data };

  constructor() {
    
  }

  public getEmployeeName(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
  }

  public getEmployeeDesignation(value: ResourceDetails): string {
    const resourceName: string = (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
    return (value as ResourceDetails).resourceData.Designation as string;
  }

  public getEmployeeImageName(value: ResourceDetails): string {
    return this.getEmployeeName(value).toLowerCase();
  }

}
