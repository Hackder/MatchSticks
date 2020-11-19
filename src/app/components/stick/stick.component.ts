import { Component, Input, OnInit } from '@angular/core';
import { MatchStick } from 'src/app/models/MatchStick.model';

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss'],
})
export class StickComponent implements OnInit {
  @Input() data: MatchStick = {
    length: 200,
    angle: 0,
    x: 200,
    y: 200,
  };

  constructor() {}

  ngOnInit(): void {}
}
