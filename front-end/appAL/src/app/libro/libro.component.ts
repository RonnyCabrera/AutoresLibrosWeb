import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  @Input() libroICBN: number;
  @Input() libroNombre: string;
  @Input() libroNumeroPaginas: number;
  @Input() libroEdicion: number;
  @Input() libroFechaPublicacion: string;
  @Input() libroNombreEditorial: string;

  constructor() {
  }

  ngOnInit() {

  }
}
