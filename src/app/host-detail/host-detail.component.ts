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

  host = new Host();

  selectedAtivo: boolean;

  isNew = true;

  constructor(private hostService: HostsService,
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
          console.log(auxTemplateHost);
          this.templatesHost = auxTemplateHost;
          this.host.host_observacoes="";
          console.log(this.templatesHost);
      }
      if(this.config.data.host){
        this.host = this.config.data.host;
        this.selectedAtivo = this.config.data.host.host_status;
        this.isNew = false
        for (let i = 0; i < config.data.host.host_template.length; i++) {
          for (let j = 0; j < this.templatesHost.length; j++){
              if(this.templatesHost[j].id === config.data.host.host_template[i]){
                this.selectedTemplates.push(this.templatesHost[j]);
              }
          }
        }
      }
      else{
        this.host.host_porta = 161;
        this.host.host_community = 'public';
        this.selectedAtivo = true;
      }
    }
  }

  ngOnInit(): void {   
  }

  saveHost(): void {
    let idTemplatesSelectedTemplates: any = [];
    
    for (let i = 0; i < this.selectedTemplates.length; i++) {
      idTemplatesSelectedTemplates[i] = this.selectedTemplates[i].id;
    }

    this.host.host_status = this.selectedAtivo;
    this.host.host_template = idTemplatesSelectedTemplates;
    console.log(this.host.host_observacoes);
    if(this.isNew){
      this.hostService.createHost(this.host).subscribe(() => this.ref.close());
    }else{
      this.hostService.editHost(this.host).subscribe(() => this.ref.close());
    }
    
  }

}
