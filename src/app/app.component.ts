import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { LoaderTextComponent } from "./shared/components/loader-text/loader-text.component";
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    CardModule, 
    LoaderTextComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {

  public authServ = inject(AuthService);


  constructor() {}

  ngOnDestroy(): void {

  }
  
  ngOnInit(): void {}

}
