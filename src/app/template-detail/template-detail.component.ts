import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ItemTemplate } from '../models/item-template';
import { Template } from '../models/template';
import { ItemService } from '../services/item.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements OnInit {

  itemTemplate: ItemTemplate[];
  
  selectedItens: any[] =  [];

  template = new Template();

  isNew = true;

  constructor(private templateService: TemplateService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) {
    if (this.config.data) { 
      if(this.config.data.itens){
        var auxItemTemplate = [];
        for (let i = 0; i < config.data.itens.length; i++) {
          var itemTemplate = {id: config.data.itens[i].id, name: config.data.itens[i].item_nome};
          auxItemTemplate.push(itemTemplate);
        }
        this.itemTemplate = auxItemTemplate;
      }
      if(this.config.data.template){
        this.template = this.config.data.template;
        this.isNew = false
        for (let i = 0; i < this.template.template_item.length; i++) {
          for (let j = 0; j <this.itemTemplate.length; j++){
              if(this.itemTemplate[i].id === this.template.template_item[j]){
                this.selectedItens.push(this.itemTemplate[i]);
              }
          }
        }
      }
    }
  }

  ngOnInit(): void {
  }

  saveTemplate(): void {
    if(this.isNew){
      this.templateService.createTemplate(this.template).subscribe(() => this.ref.close());
    }else{
      this.templateService.editTemplate(this.template).subscribe(() => this.ref.close());
    }
  }

}
