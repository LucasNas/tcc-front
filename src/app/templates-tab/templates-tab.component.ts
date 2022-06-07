import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Item } from '../models/item';
import { Template } from '../models/template';
import { ItemService } from '../services/item.service';
import { TemplateService } from '../services/template.service';
import { TemplateDetailComponent } from '../template-detail/template-detail.component';

@Component({
  selector: 'app-templates-tab',
  templateUrl: './templates-tab.component.html',
  styleUrls: ['./templates-tab.component.scss'],
  providers: [ConfirmationService,DialogService]
})
export class TemplatesTabComponent implements OnInit {

  templates: Template[];
  itens: Item[];

  constructor(private templateService:TemplateService,
              private itemService:ItemService,
              private confirmationService: ConfirmationService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getTemplates();
    this.getItens();
  }

  getTemplates(): void{
    this.templateService.getAllTemplates().subscribe((response: any) => {this.templates = response});
  }

  getItens(): void{
    this.itemService.getAllItens().subscribe((response: any) => {this.itens = response});
  }

  newTemplate(): void{
    const ref = this.dialogService.open(TemplateDetailComponent,{
      header: "Novo Template",
      width: '55%',
      data: {itens:this.itens}
    });
    ref.onClose.subscribe(() => this.getTemplates());
  }

  edit(template: Template): void{
    const ref = this.dialogService.open(TemplateDetailComponent,{
      header: "Editar " + template.template_nome,
      width: '55%',
      data: {template:template,itens:this.itens}
    });
    ref.onClose.subscribe(() => this.getTemplates());
  }
 
   delete(template:Template): void{
     
     this.confirmationService.confirm({
       message: 'Tem certeza que desejar remover \"' + template.template_nome + '\" ?',
       header: 'Confirmar remoção',
       acceptLabel:'Sim',
       rejectLabel:'Não',
       accept: ()=>{
         this.templateService.deleteTemplate(template).subscribe(() => this.getTemplates());  
       }
     });
    }
  
}
