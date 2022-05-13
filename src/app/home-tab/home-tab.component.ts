import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { HostDetailComponent } from '../host-detail/host-detail.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { Host } from '../models/host';
import { Item } from '../models/item';
import { Template } from '../models/template';
import { HostsService } from '../services/hosts.service';
import { ItemService } from '../services/item.service';
import { TemplateService } from '../services/template.service';
import { TemplateDetailComponent } from '../template-detail/template-detail.component';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss'],
  providers: [ConfirmationService,DialogService]
})
export class HomeTabComponent implements OnInit {

  templates: Template[] = [];
  itens: Item[]= [];
  hosts: Host[] = [];
  hostsAtivos = 0;
  hostsInativos = 0;

  constructor(private hostService: HostsService,
    private templateService:TemplateService,
    private itemService:ItemService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService) { }

  ngOnInit(): void {   
    this.getHosts();
    this.getTemplates();
    this.getItens();
  }

  getHosts(): void{
    this.hostService.getAllHosts().subscribe((response: any) => {
      this.hosts = response
      this.hostsStatus();});
  }

  hostsStatus(): void{
    for(let i in this.hosts){
        if(this.hosts[i].host_status){
          this.hostsAtivos++;
        }else{
          this.hostsAtivos++;
        }
    }
  }


  getTemplates(): void{
    this.templateService.getAllTemplates().subscribe((response: any) => {this.templates = response});
  }

  getItens(): void{
    this.itemService.getAllItens().subscribe((response: any) => {this.itens = response});
  }

  newHost(): void{
    this.dialogService.open(HostDetailComponent,{
      header: "Novo Host",
      width: '75%',
      data: {template:this.templates}
    });
    
  }

  newTemplate(): void{
    this.dialogService.open(TemplateDetailComponent,{
      header: "Novo Template",
      width: '75%',
      data: {itens:this.itens}
    });
  }


  newItem(): void{
    this.dialogService.open(ItemDetailComponent,{
      header: "Novo Item",
      width: '75%'
    }); 
  }
}
