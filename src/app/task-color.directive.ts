import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTaskColor]'
})
export class TaskColorDirective implements OnInit {

  @Input('appTaskColor') deadline: Date;

  // Часть переменных надо вынести за пределы класса
  today = new Date();
  hurryPeriod = 3;
  overduePeriod = 1;
  dayInMsecs = 24 * 60 * 60 * 1000;

  // classHurry = 'task-hurry';
  // classOverdue = 'task-overdue';
  // classNonUrgent= 'task-non-urgent'

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
    const dateDiff = Number(this.deadline) - Number(this.today);
    if (dateDiff >= this.overduePeriod * this.dayInMsecs && dateDiff <= this.hurryPeriod * this.dayInMsecs) {
      this.addTaskClass('task-hurry', this.elementRef);
    } else if (dateDiff <= this.overduePeriod * this.dayInMsecs) {
      this.addTaskClass('task-overdue', this.elementRef);
    } else {
      this.addTaskClass('task-non-urgent', this.elementRef);
    }
  }

  private addTaskClass(className: string, elementRef: any) {
    this.renderer.addClass(this.elementRef.nativeElement, className);
  }
}

