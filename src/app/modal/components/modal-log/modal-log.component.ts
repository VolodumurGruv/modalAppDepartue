import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-modal-log',
  templateUrl: './modal-log.component.html',
  styleUrls: ['./modal-log.component.scss'],
})
export class ModalLogComponent implements OnInit {
  display$!: Observable<'open' | 'close'>;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.display$ = this.modalService.watch();

  }

  close() {
    this.modalService.close();
  }
}
