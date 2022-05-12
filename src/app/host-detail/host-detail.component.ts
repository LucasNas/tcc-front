import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Ativo } from '../models/ativo';
import { Host } from '../models/host';
import { Template } from '../models/template';
import { TemplateHost } from '../models/template-host';
import { HostsService } from '../services/hosts.service';
import { TemplateService } from '../services/template.service';


@Component({
  selector: 'app-host-detail',
  templateUrl: './host-detail.component.html',
  styleUrls: ['./host-detail.component.scss']
})
export class HostDetailComponent implements OnInit {

  templatesHost: TemplateHost[];
  
  selectedTemplates: any[] = [];

  ativo : Ativo[];

  host : Host = new Host();

  selectedAtivo: boolean

  constructor(private hostService: HostsService,
    private templateService: TemplateService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) {
      this.ativo = [
        {name: "Ativo", ativo: true},
        {name: "Inativo", ativo: false}
      ] 
      if (this.config.data) { 
        if(this.config.data.template){
          var auxTemplateHost = [];
          for (let i = 0; i < config.data.template.length; i++) {
            var templateHost = {id: config.data.template[i].id, name: config.data.template[i].template_nome};
            auxTemplateHost.push(templateHost);
          }
          this.templatesHost = auxTemplateHost;
      }
      if(this.config.data.host){
        this.host = this.config.data.host;
        this.selectedAtivo = this.config.data.host.host_status;
        for (let i = 0; i < config.data.host.host_template.length; i++) {
          for (let j = 0; i <this.templatesHost.length; i++){
              if(this.templatesHost[i].id === config.data.host.host_template[j]){
                
                this.selectedTemplates.push(this.templatesHost[i]);
              }
          }
        }
        
    }
    }
  }

  ngOnInit(): void {
    
  }

  saveHost(): void {
    this.host.host_status = this.selectedAtivo;
    console.log(this.host)
    this.ref.close();
  }

}
