import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import {ButtonComponent} from './components/button/button.component';
import { InputComponent} from './components/input/input.component';
import {FileComponent} from './components/file/file.component';
import {PieComponent} from './components/charts/pie/pie.component';
import {MensajesComponent} from './components/messages/mensajes/mensajes.component';
import {DataComponent} from './components/data/data.component';
import { OverlayComponent} from './components/overlay/overlay.component';
import { PanelComponent} from './components/panel/panel.component';
import {MiscComponent} from './components/misc/misc.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'input', component: InputComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'data', component: DataComponent},
  {path: 'overlay', component: OverlayComponent},
  {path: 'file', component: FileComponent},
  {path: 'charts', component: PieComponent},
  {path: 'messages', component: MensajesComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'misc', component: MiscComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
