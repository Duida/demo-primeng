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
import {GalleriaModule} from 'primeng-lts/galleria';
import {DynamicDialogModule} from 'primeng-lts/dynamicdialog';
import {AccordionModule} from 'primeng-lts/accordion';
import {CardModule} from 'primeng-lts/card';
import {TabViewModule} from 'primeng-lts/tabview';


import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { OverlayComponent } from './overlay/overlay.component';
import { MensajesComponent } from './messages/mensajes/mensajes.component';
import { ToastComponent } from './messages/toast/toast.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './charts/pie/pie.component';
import { FileComponent } from './file/file.component';
import { ValidationComponent } from './validation/validation.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { HomeComponent } from './home/home.component';
import { PrimeFlexComponent } from './prime-flex/prime-flex.component';
import { DataComponent } from './data/data.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { PanelComponent } from './panel/panel.component';
import { MiscComponent } from './misc/misc.component';




@NgModule({
  declarations: [MenuComponent, ToastComponent, MensajesComponent,
                 OverlayComponent, InputComponent, ButtonComponent, PieComponent, FileComponent,
                 ValidationComponent, MultimediaComponent, HomeComponent, PrimeFlexComponent,
                  DataComponent, DragDropComponent, PanelComponent, MiscComponent],
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
    TableModule,
    GalleriaModule,
    DynamicDialogModule,
    AccordionModule,
    CardModule,
    TabViewModule
  ],
  exports: [MenuComponent, ToastComponent, MensajesComponent,
            OverlayComponent, ButtonComponent, PieComponent,
            FileComponent, InputComponent, ValidationComponent,
            MultimediaComponent, HomeComponent, PrimeFlexComponent, DataComponent, DragDropComponent, MiscComponent ]
})
export class ComponentsModule { }
