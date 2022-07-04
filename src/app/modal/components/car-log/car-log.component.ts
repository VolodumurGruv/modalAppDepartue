import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-log',
  templateUrl: './car-log.component.html',
  styleUrls: ['./car-log.component.scss'],
})
export class CarLogComponent implements OnInit {
  public carModel: string[] = ['BMW | X3', 'AUDI | A4'];
  public numbers: string[] = ['AA1212AA', 'BB2323BB'];

  constructor() {}

  ngOnInit(): void {}
}
