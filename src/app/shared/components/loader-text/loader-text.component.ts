import { Component, Input } from '@angular/core';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-loader-text',
  imports: [LoaderComponent],
  templateUrl: './loader-text.component.html',
  styleUrl: './loader-text.component.scss'
})
export class LoaderTextComponent {

  @Input() text:string = 'Cargando...';

}
