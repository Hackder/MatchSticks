import { CdkDragDrop, CdkDragRelease } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { MatchStick } from './models/MatchStick.model';
import { Point } from './models/Point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  horizontalStick: MatchStick = {
    length: 200,
    x: 0,
    y: 0,
    angle: 0,
  };

  verticalStick: MatchStick = {
    length: 200,
    x: 0,
    y: 0,
    angle: 90,
  };

  angledStick: MatchStick = {
    length: 200,
    x: 0,
    y: 0,
    angle: 45,
  };

  sticks: MatchStick[] = [];

  mousePosition: Point = new Point(0, 0);

  @ViewChild('container') container: ElementRef<HTMLDivElement> | undefined;

  stickDropped(event: CdkDragDrop<MatchStick>) {
    this.sticks.push({
      length: 200,
      x: this.mousePosition.x - 100,
      y: this.mousePosition.y,
      angle: event.item.data.angle,
    });
  }

  mousemove(e: MouseEvent) {
    this.mousePosition = new Point(e.clientX, e.clientY);
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.mousemove.bind(this));
    });
  }

  insideStickReleased(event: CdkDragRelease<MatchStick>) {
    if (
      event.source.element.nativeElement.getBoundingClientRect().top >
      (this.container?.nativeElement.getBoundingClientRect().height || 720) -
        200
    ) {
      this.sticks = this.sticks.filter((s) => s !== event.source.data);
    }
  }
  constructor(private zone: NgZone) {}
}
