import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-itens-tab',
  templateUrl: './itens-tab.component.html',
  styleUrls: ['./itens-tab.component.scss'],
  providers: [ConfirmationService,DialogService]
})
export class ItensTabComponent implements OnInit {

  itens: Item[];

  constructor(private itemService:ItemService,
              private confirmationService: ConfirmationService,
              private dialogService: DialogService) { }

  ngOnInit(): void {

    this.getItens();
  }

  getItens(): void{
    this.itemService.getAllItens().subscribe((response: any) => {this.itens = response});
  }

  newItem(): void{
    this.dialogService.open(ItemDetailComponent,{
      header: "Novo Template",
      width: '75%'
    });
    
  }

  editItem(item: Item): void{
    this.dialogService.open(ItemDetailComponent,{
      header: "Editar " + item.item_nome,
      width: '75%',
      data: {item:item}
    });
  }
 
   deleteItem(item: Item): void{
     
     this.confirmationService.confirm({
       message: 'Tem certeza que desejar remover \"' + item.item_nome + '\" ?',
       header: 'Confirmar remoção',
       acceptLabel:'Sim',
       rejectLabel:'Não',
       accept: ()=>{
         this.itemService.deleteItem(item).subscribe(() => this.getItens());  
       }
     });
    }

    updateTxt(item: Item): string{
      switch(item.item_intervaloAtualizacaoUn) {
        case 'seconds':
          return item.item_intervaloAtualizacao + "segundo(s)";
        case 'minutes':
          return item.item_intervaloAtualizacao + "minuto(s)"; 
        case 'hours':
          return item.item_intervaloAtualizacao + "hora(s)";  
        case 'days':
          return item.item_intervaloAtualizacao + "dia(s)"; 
        case 'months':
          return item.item_intervaloAtualizacao + "mes(es)";
        case 'years':
          return item.item_intervaloAtualizacao + "ano(s)";
        default:
          return "";
      } 
    }

    storageTxt(item: Item): string{
      switch(item.item_tempoArmazenamentoDadosUn) {
        case 'minutes':
          return item.item_tempoArmazenamentoDados + "minuto(s)"; 
        case 'hours':
          return item.item_tempoArmazenamentoDados + "hora(s)";  
        case 'days':
          return item.item_tempoArmazenamentoDados + "dia(s)"; 
        case 'months':
          return item.item_tempoArmazenamentoDados + "mes(es)";
        case 'years':
          return item.item_tempoArmazenamentoDados + "ano(s)";
        default:
          return "";
      } 
  }

}
