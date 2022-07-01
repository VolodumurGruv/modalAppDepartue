import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.open();
  }

  open() {
    this.modalService.open();
  }
}
