import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsComponent } from "@shared/components/cards/cards.component";
import { timer } from 'rxjs';
import { LoaderTextComponent } from "@shared/components/loader-text/loader-text.component";
import { ButtonModule } from 'primeng/button';
import { StatusBaseComponent } from '@shared/components/status-base/status-base.component';

@Component({
  selector: 'app-step2-collector',
  imports: [
    CardsComponent, 
    LoaderTextComponent,
    ButtonModule
  ],
  templateUrl: './step2-collector.component.html'
})
export class Step2CollectorComponent extends StatusBaseComponent implements OnInit{
  
  router = inject(Router);

  cards = [
    {
      id: 1,
      name: 'Collector 1',
      img: 'assets/images/collector.png',
      description: 'Collector 1 description',
      data: {
        id: 1,
        name: 'Collector 1'
      }
    },
    {
      id: 2,
      name: 'Collector 2',
      img: 'assets/images/collector.png',
      description: 'Collector 2 description',
      data: {
        id: 2,
        name: 'Collector 2'
      }
    },
    {
      id: 3,
      name: 'Collector 3',
      img: 'assets/images/collector.png',
      description: 'Collector 3 description',
      data: {
        id: 3,
        name: 'Collector 3'
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

    this.router.navigate(['operador', 'step3']);
  }

}

