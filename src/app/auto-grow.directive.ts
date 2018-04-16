//must import element ref and Render 
import { Directive , ElementRef , Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host:{
    '(focus)':'onFocus()',
    '(blur)':'onBlur()'
  }
})
export class AutoGrowDirective {

  constructor(private ele : ElementRef , private renderer :Renderer) { }

  onFocus(){
    //to change width of filed 
    this.renderer.setElementStyle(this.ele.nativeElement,'width','100%');
    //change placeholder
    this.renderer.setElementAttribute(this.ele.nativeElement,'placeholder','Search to filter products');
  }

  onBlur(){
    //to change width of filed 
    this.renderer.setElementStyle(this.ele.nativeElement,'width','200px');
     //change placeholder
    this.renderer.setElementAttribute(this.ele.nativeElement,'placeholder','Search');
  }
}
