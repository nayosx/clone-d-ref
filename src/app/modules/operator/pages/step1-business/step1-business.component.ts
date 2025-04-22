import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsComponent } from "@shared/components/cards/cards.component";
import { timer } from 'rxjs';
import { LoaderTextComponent } from "@shared/components/loader-text/loader-text.component";
import { ButtonModule } from 'primeng/button';
import { StatusBaseComponent } from '@shared/components/status-base/status-base.component';

@Component({
  selector: 'app-step1-business',
  imports: [
    CardsComponent, 
    LoaderTextComponent,
    ButtonModule
  ],
  templateUrl: './step1-business.component.html'
})
export class Step1BusinessComponent extends StatusBaseComponent implements OnInit{
  
  router = inject(Router);

  cards = [
    {
      id: 1,
      name: 'Business 1',
      img: 'assets/images/business.png',
      description: 'Business 1 description',
      data: {
        id: 1,
        name: 'Business 1'
      }
    },
    {
      id: 2,
      name: 'Business 2',
      img: 'assets/images/business.png',
      description: 'Business 2 description',
      data: {
        id: 2,
        name: 'Business 2'
      }
    },
    {
      id: 3,
      name: 'Business 2',
      img: 'assets/images/business.png',
      description: 'Business 3 description',
      data: {
        id: 3,
        name: 'Business 3'
      }
    }
  ];

  ngOnInit(): void {
    this.setLoading();
    timer(2000).subscribe(() => {
      this.setError();
    });
  }


  getData():void {
    this.setLoading();
    timer(2000).subscribe(() => {
      this.setSuccess();
    });
  }

  onCardSelected(data: any): void {
    console.log(data);

    this.router.navigate(['operador', 'step2']);
  }

}
