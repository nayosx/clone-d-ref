import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-status-base',
  imports: [],
  template: `<p>Status Base</p>`,
  encapsulation: ViewEncapsulation.None
})
export abstract class StatusBaseComponent {

  isLoading = false;
  isError = false;

  setLoading() {
    this.isLoading = true;
    this.isError = false;
  }

  setError() {
    this.isLoading = false;
    this.isError = true;
  }

  setSuccess() {
    this.isLoading = false;
    this.isError = false;
  }
  
}
