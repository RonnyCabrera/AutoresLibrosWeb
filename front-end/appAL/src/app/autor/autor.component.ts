import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  @Input() autorNombres: string;
  @Input() autorApellidos: string;
  @Input() autorFechaNacimiento: string;
  @Input() autorNumeroLibros: number;
  @Input() autorEcuatoriano: boolean;

  constructor() {
  }

  ngOnInit() {

  }
}
