import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-side-block',
  templateUrl: './side-block.component.html',
  styleUrls: ['./side-block.component.css']
})
export class SideBlockComponent implements OnInit {

  @Input() hoverItemId : number ; 

  constructor() {
   }

  ngOnInit() {  
  }


}
