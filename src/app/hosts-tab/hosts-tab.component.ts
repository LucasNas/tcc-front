import { Component, OnInit } from '@angular/core';
import { Host } from '../models/host';
import { HostsService } from '../services/hosts.service';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
import { HostDetailComponent } from '../host-detail/host-detail.component';
import { ChartService } from '../services/chart.service';
import { TemplateService } from '../services/template.service';
import { Template } from '../models/template';
import { ChartDetailComponent } from '../chart-detail/chart-detail.component';


@Component({
  selector: 'app-hosts-tab',
  templateUrl: './hosts-tab.component.html',
  styleUrls: ['./hosts-tab.component.scss'],
  providers: [ConfirmationService,DialogService]
})
export class HostsTabComponent implements OnInit {

  hosts: Host[];
  templates: Template[];
  charts: any[];

  constructor(private hostService: HostsService,
    private chartService: ChartService,
    private templateService: TemplateService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getHosts();
    this.getTemplates();
  }

  getHosts(): void{
    this.hostService.getAllHosts().subscribe((request: any) => {this.hosts = request});
  }

  getTemplates(): void{
    this.templateService.getAllTemplates().subscribe((request: any) => {this.templates = request});
  }
  
  newHost(): void{
    this.dialogService.open(HostDetailComponent,{
      header: "Novo Host",
      width: '55%',
      data: {template:this.templates}
    });
    
  }

  openChart(host:Host): void{
    this.chartService.getAllData().subscribe(response => {this.charts = response});
    this.dialogService.open(ChartDetailComponent,{
      header: "Dados de " + host.host_nome,
      width: '55%',
      data: {host:host,charts:this.charts}
    });
  }

  edit(host:Host): void{
   this.dialogService.open(HostDetailComponent,{
     header: "Editar " + host.host_nome,
     width: '55%',
     data: {host:host,template:this.templates}
   });
  }

  delete(host:Host): void{
    
    this.confirmationService.confirm({
      message: 'Tem certeza que desejar remover \"' + host.host_nome + '\" ?',
      header: 'Confirmar remoção',
      acceptLabel:'Sim',
      rejectLabel:'Não',
      accept: ()=>{
        this.hostService.deleteHost(host).subscribe(any => this.getHosts());  
      }
    });
    
  }

}
