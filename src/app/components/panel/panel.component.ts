import { Component, OnInit } from '@angular/core';
import { MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [MessageService]
})
export class PanelComponent implements OnInit {

  index: number = -1;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }


  onTabClose(event) {
    this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
}

onTabOpen(event) {
    this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
}

openNext() {
    this.index = (this.index === 3) ? 0 : this.index + 1;
}

openPrev() {
    this.index = (this.index <= 0) ? 3 : this.index - 1;
}
}
