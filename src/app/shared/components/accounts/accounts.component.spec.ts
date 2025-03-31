import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsComponent } from './accounts.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent<any>;
    let fixture: ComponentFixture<AccountsComponent<any>>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [AccountsComponent]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(AccountsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
