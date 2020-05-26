import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng-lts/menubar';
import {ToastModule} from 'primeng-lts/toast';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng-lts/button';
import {MessagesModule} from 'primeng-lts/messages';
import {MessageModule} from 'primeng-lts/message';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import {DialogModule} from 'primeng-lts/dialog';
import {SplitButtonModule} from 'primeng-lts/splitbutton';
import {ChartModule} from 'primeng-lts/chart';
import {FileUploadModule} from 'primeng-lts/fileupload';
import {CheckboxModule} from 'primeng-lts/checkbox';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import {DeferModule} from 'primeng-lts/defer';
import {TableModule} from 'primeng-lts/table';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { OverlayComponent } from './overlay/overlay.component';
import { MensajesComponent } from './messages/mensajes/mensajes.component';
import { ToastComponent } from './messages/toast/toast.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './charts/pie/pie.component';
import { FileComponent } from './file/file.component';
import { ValidationComponent } from './validation/validation.component';



@NgModule({
  declarations: [MenuComponent, ToastComponent, MensajesComponent,
                 OverlayComponent, InputComponent, ButtonComponent, PieComponent, FileComponent,
                  ValidationComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    SplitButtonModule,
    ChartModule,
    FileUploadModule,
    CheckboxModule,
    RadioButtonModule,
    DeferModule,
    TableModule
  ],
  exports: [MenuComponent, ToastComponent, MensajesComponent,
            OverlayComponent, ButtonComponent, PieComponent,
            FileComponent, InputComponent, ValidationComponent ]
})
export class ComponentsModule { }
