import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.scss']
})
export class ChartDetailComponent implements OnInit {

  datas: any = [];
  
  constructor(private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) {
      
  }

  ngOnInit(): void {
    
    for(let k in this.config.data.charts){
      if(this.config.data.charts[k].nome_host === this.config.data.host.host_nome){
        this.buildData(this.config.data.charts[k]);
        break;
      }
      
    }
    
    
   
  }

  buildData(data: any):void{
    for(let i=0; i < data.itens.length; i++){
      console.log(data.itens[i]);
      if(data.itens[i].item_tipoInformacao == 'NI' || data.itens[i].item_tipoInformacao == 'ND'){
        this.createChart(data.itens[i]);
      }
      if(data.itens[i].item_tipoInformacao == 'CH'){
        this.createInfo(data.itens[i]);
      }
    }
   
  }

  createChart(chart: any): void{
    let hasError= false;

    if(chart.expression != null){
      for(let i = 0; i<chart.data.length; i++){
        try {
          let strValue = String(chart.data[i])
          let strExpression = String(chart.expression)
          chart.data[i] = eval(strExpression.replace('{OID}', strValue))
        }
        catch (e){
          hasError = true;
        }
      }  
    }
    this.datas.push({
      labels: chart.labels,
      datasets: [
          {
              label: chart.item_nome,
              data: chart.data,
              fill: false,
              borderColor: '#050000',
              tension: .4
          }
      ],
      tipo: chart.item_tipoInformacao,
      error: hasError,
      header: chart.item_nome
    },)
  }

  createInfo(info: any): void{
    let hasError= false;
    let infoData;
    let infoUpdate;
    if(info.expression != null){
      try {
        let strValue = String(info.data[info.data.length - 1])
        let strExpression = String(info.expression)
        infoData = eval(strExpression.replace('{OID}', strValue))
      }
      catch (e){
        infoData = String(info.data[info.data.length - 1]);
        hasError = true;
      }
    }else{
      infoData = String(info.data[info.data.length - 1]);
    }
    if(infoData === 'No SNMP response received before timeout'){
      hasError = true;
    }
    infoUpdate = info.labels[info.labels.length - 1];
      this.datas.push({
        labels:infoUpdate,
        datasets:infoData,
        tipo: info.item_tipoInformacao,
        error: hasError,
        header: info.item_nome
      })
  }
  
}
