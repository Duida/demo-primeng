import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng-lts/api';
import {MegaMenuItem} from 'primeng-lts/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              icon: 'pi pi-fw pi-file',
              items: [{
                      label: 'New', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {separator:true},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          },
          {
              label: 'Help',
              icon: 'pi pi-fw pi-question',
              items: [
                  {
                      label: 'Contents'
                  },
                  {
                      label: 'Search', 
                      icon: 'pi pi-fw pi-search', 
                      items: [
                          {
                              label: 'Text', 
                              items: [
                                  {
                                      label: 'Workspace'
                                  }
                              ]
                          },
                          {
                              label: 'File'
                          }
                  ]}
              ]
          },
          {
              label: 'Actions',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {label: 'Save', icon: 'pi pi-fw pi-save'},
                          {label: 'Update', icon: 'pi pi-fw pi-save'},
                      ]
                  },
                  {
                      label: 'Other',
                      icon: 'pi pi-fw pi-tags',
                      items: [
                          {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                      ]
                  }
              ]
          },
          {separator:true},
          {
              label: 'Quit', icon: 'pi pi-fw pi-times'
          }
      ];
  }

}
