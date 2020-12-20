import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ind',
  templateUrl: './show-ind.component.html',
  styleUrls: ['./show-ind.component.css']
})
export class ShowIndComponent implements OnInit {

  constructor(private service:SharedService) { 
    
  } 


  IndicadorList:any=[];
  data:any=[];

  searchFilter:string = '';
  strSearchResults:string='';
  p: number = 1;

  ngOnInit(): void 
  {
    this.strSearchResults = "";
    this.refreshIndicadorList("");

  }
  ModalTitle:string="";
  ActivateViewIndComp:boolean=true;
  ind:any;

  viewClick(item: any){
    this.ind=item,
    this.ModalTitle = "Detalle Indicador",
    this.ActivateViewIndComp=true;
  }

  closeClick(){
    this.ActivateViewIndComp=false;
    this.refreshIndicadorList("");
  }

  clickSearch()
  {
    this.strSearchResults = "";
    this.refreshIndicadorList(this.searchFilter);
    this.p=1;
  }

  isNotNumeric(num: any){
    return isNaN(num)
  }

   refreshIndicadorList(searchStr: string){
   
    //Funciones para formatear valor por tipo de unidad
    let peso = new Intl.NumberFormat('es-AR', {style: 'currency',currency: 'ARS'});
    let dolar = new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"});
    let utm = new Intl.NumberFormat('es-CL', {style: 'currency',currency: 'CLP'});
    let percent = new Intl.NumberFormat("en-NZ", {style: "percent", currency: 'NZD',minimumFractionDigits: 1});

    if(this.searchFilter == "" || this.isNotNumeric(this.searchFilter))
    {
      
      this.service.getIndicadorList({"tipoIndicador":searchStr.toLocaleLowerCase().trim()}).subscribe(data => {
        
        this.data = data;

        var content = this.data.contenido[0].indicadores;
        
            content.forEach(function (result:any) {

              //Convertir Unix Time en fecha local
              result.date = new Date(result.date * 1000).toLocaleDateString("es-CL")

              //Formatear tipo de unidad
              if (result.unit == "porcentual")
              {
                result.value = percent.format(result.value);
              }
              else{ 
                if (result.unit == "pesos"){
                  result.value = peso.format(result.value);
                }
                else{
                    if (result.key == "utm"){
                      result.value = utm.format(result.value);
                    }
                    else{
                      result.value = dolar.format(result.value);
                  }               
                }    
              }
            });

        this.IndicadorList = content;
        if(this.searchFilter == "")
          this.strSearchResults = this.IndicadorList.length +" registro(s) encontrados en total.";

        this.searchFilter = "";

        if(searchStr.length > 0)
              this.strSearchResults = this.IndicadorList.length +" registro(s) encontrados para: "+ searchStr +" ";
      })
    }      
    else{
      this.strSearchResults = "Por favor ingrese indicador económico o blanco para buscar.";
      this.IndicadorList = [];
    }
  };

}


