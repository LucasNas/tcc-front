import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-front';

  items: MenuItem[];
  activeItem: MenuItem;
  
  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-home',routerLink: ['/home']},
        {label: 'Hosts', icon: 'pi pi-sitemap',routerLink: ['/hosts']},
        {label: 'Templates', icon: 'pi pi-folder',routerLink: ['/templates']},
        {label: 'Itens', icon: 'pi pi-list',routerLink: ['/itens']},
    ];

    this.activeItem = this.items[0];
}

}
