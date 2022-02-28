import { Component, OnInit } from '@angular/core';
import { ServicesGantt } from 'src/app/components/services.service';
import { Datum, IDUser, RESTBooksResponse } from 'src/app/interfaces/gantt.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  public dato: RESTBooksResponse;
  public dato2: Datum[] = [];
  public datoEmployed:IDUser[]=[]
  public error:boolean=false;
 
  constructor(private service:ServicesGantt) { }

  ngOnInit(): void {
    this.searh();
  }
  searh() {
    this.service.searchData().subscribe((ele) => {
      this.dato2 = ele.data
      console.log(this.dato2)

      this.dato2.forEach(ele => this.datoEmployed.push(ele.summoned_users[0].id_user))
      //console.log(ele);
      console.log(this.datoEmployed);
      if (!(this.datoEmployed.length > 0 )){
        this.error=true;
      }
    })
  }

}
