import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng-lts/api';
import {Message} from 'primeng-lts/components/common/api';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  providers: [ConfirmationService]
})
export class OverlayComponent  {

  msgs: Message[] = [];
  // tslint:disable-next-line:no-inferrable-types
  display: boolean = false;
  
  constructor(private confirmationService: ConfirmationService) {}

  confirm1() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
          }
      });
  }

  confirm2() {
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
          }
      });
  }

  showDialog() {
    this.display = true;
}

}
