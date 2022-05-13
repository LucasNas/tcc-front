import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { HostsTabComponent } from './hosts-tab/hosts-tab.component';
import { TemplatesTabComponent } from './templates-tab/templates-tab.component';
import { ItensTabComponent } from './itens-tab/itens-tab.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { HostDetailComponent } from './host-detail/host-detail.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import {AccordionModule} from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { TemplateDetailComponent } from './template-detail/template-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent,
    HostsTabComponent,
    TemplatesTabComponent,
    ItensTabComponent,
    HostDetailComponent,
    ChartDetailComponent,
    TemplateDetailComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    TableModule,
    HttpClientModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    ListboxModule,
    FormsModule,
    DropdownModule,
    ChartModule,
    AccordionModule,
    CalendarModule,
    InputNumberModule
  ],
  providers: [ConfirmationService,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
