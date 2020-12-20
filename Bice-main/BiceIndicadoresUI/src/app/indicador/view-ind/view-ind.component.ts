import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-ind',
  templateUrl: './view-ind.component.html',
  styleUrls: ['./view-ind.component.css']
})
export class ViewIndComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ind:any;
  IndicadorKey:string="";
  IndicadorName:string="";
  IndicadorUnit:string="";

  ngOnInit(): void {
  /*  this.IndicadorKey = this.ind.IndicadorKey;
    this.IndicadorName = this.ind.IndicadorName;
    this.InicadorUnit = this.ind.IndicadorUnit;*/
  }

}
