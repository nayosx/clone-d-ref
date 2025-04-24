import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputDuiNitComponent } from "@shared/components/input-dui-nit/input-dui-nit.component";
import { StatusBaseComponent } from '@shared/components/status-base/status-base.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-step3-link-user',
  imports: [
    InputDuiNitComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule,
],
  templateUrl: './step3-link-user.component.html'
})
export class Step3LinkUserComponent extends StatusBaseComponent implements OnInit {
  form!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);

  ngOnInit(): void {
    this.form = this.fb.group({
      identificacion: ['']
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.router.navigate(['operador', 'step4']);
  }

  onCancel(): void {
    this.form.reset();
  }
}