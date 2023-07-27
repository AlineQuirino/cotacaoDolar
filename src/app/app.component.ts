import { Component } from '@angular/core';
import { CotacaoService } from './cotacao.service';
import { Dolar } from './Dolar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cotacaoDolar';
  dataInicio = "07-20-2023"
  dataFinal = "07-25-2023"
  cotacoes?: Dolar[]

  constructor(private cotacaoService: CotacaoService){}

  mostrarCotacao(){
      this.cotacaoService.getConfig(this.dataInicio, this.dataFinal)
      .subscribe(
        cotacao => this.cotacoes = cotacao
      )
  }
}
