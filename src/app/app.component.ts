import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, PLATFORM_ID, afterRender, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { StoreService } from '@shared/services/store/store.service';
import { CardModule } from 'primeng/card';
import { LoaderTextComponent } from "./shared/components/loader-text/loader-text.component";
import { ROUTES_PATH } from '@core/routes';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardModule, LoaderTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _authServ = inject(AuthService);
  private _storeServ = inject(StoreService);
  private _subscriptions!:Subscription;

  private _param:string = 'token';
  private _valueToken:string;
  private _tokenExternal:string = '';

  isLoading:boolean = false;
  isError:boolean = true;

  constructor() {
    this._valueToken = this._storeServ.getSession<string>('token') ?? '';
  }

  ngOnDestroy(): void {
    if(this._subscriptions) {
      this._subscriptions.unsubscribe();
    }
  }
  
  ngOnInit(): void {
    this.evaluateTokenSession();
  }

  evaluateTokenSession():void {
    this._subscriptions = this._route.queryParams.subscribe((queryParams) => {
      this._tokenExternal = queryParams[this._param] ?? '';
      if (this._tokenExternal !== '' && this._valueToken === '') {
        this.login(this._tokenExternal);
      } else if(this._tokenExternal === '' && this._valueToken !== '') {
        this._nextMoveTo();
      }
    });
  }

  login(arg:string): void {
    this.isLoading = true;
    this.isError = false;

    this._authServ.login({ tempToken: arg }).subscribe({
      next: (data) => {
        const valTokenAuth = data.token || data.fakeJwt || '';
        if (data?.token || data?.fakeJwt) {
          this._storeServ.setSession('token', valTokenAuth);
          this._nextMoveTo();
        } else {
          this._setError();
        }
      },
      error: (error) => {
        this._setError();
      },
    });
  }

  private _nextMoveTo():void {
    this._setSuccess();
    this._router.navigate([`${ROUTES_PATH.PAYER_BUSINESS}`]);
  }

  private _setSuccess():void {
    this.isError = false;
    this.isLoading = false;
  }
  private _setError(): void {
    this.isError = true;
    this.isLoading = false;
  }
}
