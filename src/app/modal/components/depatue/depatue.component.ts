import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depatue',
  templateUrl: './depatue.component.html',
  styleUrls: ['./depatue.component.scss'],
})
export class DepatueComponent implements OnInit {
  public change: boolean = false;
  public logNameInput: string = 'LOG NAME';
  public time: string | number = '0h 0m';
  public timeDepartue: string = '--/--/----|--:--';
  public timeArival: string = '--/--/----|--:--';

  constructor() {}

  ngOnInit(): void {}

  editLogName() {
    this.change = !this.change;
  }
}
