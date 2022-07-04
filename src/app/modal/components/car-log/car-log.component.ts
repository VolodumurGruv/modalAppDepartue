import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-log',
  templateUrl: './car-log.component.html',
  styleUrls: ['./car-log.component.scss'],
})
export class CarLogComponent implements OnInit {
  public carModel: string[] = ['BMW | X3', 'AUDI | A4'];
  public numbers: string[] = ['AA1212AA', 'BB2323BB'];

  public improvedCarModel: any[] = [
    { 'BMW | X3': 'BB2323BB', 'AUDI | A4': 'AA1212AA' },
  ];

  public selectedCar!: string;

  constructor() {}

  ngOnInit(): void {}
}
