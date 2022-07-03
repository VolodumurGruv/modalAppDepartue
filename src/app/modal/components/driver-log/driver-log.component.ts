import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-log',
  templateUrl: './driver-log.component.html',
  styleUrls: ['./driver-log.component.scss'],
})
export class DriverLogComponent implements OnInit {
  public whois: string = 'self';
  public driverName!: string;
  public driverNameValue!: string;

  ngOnInit(): void {}

  self() {
    this.whois = 'self';
  }

  other() {
    this.whois = 'other';
  }

  editDriverName() {
    this.driverNameValue = this.driverName;
  }

  clearName() {
    this.driverName = '';
  }
}
