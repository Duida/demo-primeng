import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers:[MessageService]
})
export class FileComponent  {

  uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
