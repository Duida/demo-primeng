import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng-lts/api';
import {MenuItem} from 'primeng-lts/api';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers:[MessageService]
})
export class ButtonComponent implements OnInit {
  items: MenuItem[];
  constructor(private messageService: MessageService) { }

  // tslint:disable-next-line:no-inferrable-types
  clicks: number = 0;

  count() {
      this.clicks++;
  }

  ngOnInit() {
    this.items = [
        {label: 'Update', icon: 'pi pi-refresh', command: () => {
            this.update();
        }},
        {label: 'Delete', icon: 'pi pi-times', command: () => {
            this.delete();
        }},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {separator: true},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
}

save(severity: string) {
  this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
}

update() {
  this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
  this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
}
}
