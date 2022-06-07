import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OIDFormat } from '../models/OIDFormat';
import { Item } from '../models/item';
import { UnTime } from '../models/unTime';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  
  item= new Item;
  isNew = true;
  unOID: OIDFormat[];
  unFreq: UnTime[];
  unData: UnTime[];

  selectedUnOID: string;
  selectedUnFreq: string;
  selectedUnData: string;
  

  constructor(private itemService: ItemService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) {
      this.unOID = [
        {name: 'Numérico(Inteiro)', id: 'NI'},
        {name: 'Numérico(Decimal)', id: 'ND'},
        {name: 'Caracter', id: 'CH'},
        {name: 'Log', id: 'LG'}
      ]
      this.unFreq = [
        {name: 'seconds', nome: 'Segundos'},
        {name: 'minutes', nome: 'Minutos'},
        {name: 'hours', nome: 'Horas'},
        {name: 'days', nome: 'Dias'},
        {name: 'months', nome: 'Meses'},
        {name: 'years', nome: 'Anos'}
      ] 
      this.unData = [
        {name: 'minutes', nome: 'Minutos'},
        {name: 'hours', nome: 'Horas'},
        {name: 'days', nome: 'Dias'},
        {name: 'months', nome: 'Meses'},
        {name: 'years', nome: 'Anos'}
      ]
      if(this.config.data){
        if(this.config.data.item){
          this.item = this.config.data.item;
          this.isNew = false
          this.selectedUnOID = this.item.item_tipoInformacao;
          this.selectedUnFreq = this.item.item_intervaloAtualizacaoUn;
          this.selectedUnData = this.item.item_tempoArmazenamentoDadosUn;
        }
      }
  }

  ngOnInit(): void {
  }

  saveHost(): void {
    this.item.item_tipoInformacao =  this.selectedUnOID;
    this.item.item_intervaloAtualizacaoUn = this.selectedUnFreq;
    this.item.item_tempoArmazenamentoDadosUn = this.selectedUnData;
    if(this.isNew){
      this.itemService.createItem(this.item).subscribe(() => this.ref.close());
    }else{
      this.itemService.editItem(this.item).subscribe(() => this.ref.close());
    }
  }

}
