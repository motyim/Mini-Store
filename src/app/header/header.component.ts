import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total : number =0  ;
  constructor(private totalService: TotalService) { }

  ngOnInit() {
    this.totalService.currentTotal.subscribe(t=>this.total=t);
  }


}
