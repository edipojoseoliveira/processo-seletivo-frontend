import { Component } from '@angular/core';
import { StatusServico } from './model/statusservico';
import { StatusServicoService } from './service/statusservico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data: Date;
  estado: string;
  maisIndisponivel: any;

  listaStatusServicos: StatusServico[];

  constructor(private statusServicoService: StatusServicoService) { }

  ngOnInit() {
    this.filtrar();
    this.carregaMaisIndisponivel();
  }

  carregaMaisIndisponivel() {
    this.statusServicoService.getMaisIndisponivel()
        .subscribe(item => {
          this.maisIndisponivel = item;
        });
  }

  filtrar() {
    if (this.data != null) {
      this.statusServicoService.getListaStatusServicoPorData(this.data)
        .subscribe(lista => {
          this.listaStatusServicos = lista;
        });
    } else if (this.estado != null && this.estado != '') {
      this.statusServicoService.getListaStatusServicoPorEstado(this.estado)
        .subscribe(lista => {
          this.listaStatusServicos = lista;
        });
    } else {
      this.statusServicoService.getListaStatusServico()
        .subscribe(lista => {
          this.listaStatusServicos = lista;
        });
    }    
  }

}
