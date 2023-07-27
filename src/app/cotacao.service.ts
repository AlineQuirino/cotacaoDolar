import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Dolar } from './Dolar';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class CotacaoService {

  constructor(private http: HttpClient) { }

  getConfig(dataInicial: string,dataFinalCotacao: string){
    return this.http.get<Dolar[]>(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${dataInicial}'&@dataFinalCotacao='${dataFinalCotacao}'&$top=100&$format=json`)
  }

}
