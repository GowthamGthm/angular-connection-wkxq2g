import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fast]'
})
export class FastDirective {
  
  constructor(public tpl: TemplateRef<any>) { }

}