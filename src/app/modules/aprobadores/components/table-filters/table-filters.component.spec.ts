import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTableFiltersComponent } from './table-filters.component';
import { By } from '@angular/platform-browser';

describe('AppTableFiltersComponent', () => {
  let component: AppTableFiltersComponent;
  let fixture: ComponentFixture<AppTableFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTableFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar 4 radios', () => {
    const radios = fixture.debugElement.queryAll(By.css('app-radio'));
    expect(radios.length).toBe(4);
  });

  it('debería actualizar "tipo" cuando un radio emite un nuevo valor', () => {
    const radios = fixture.debugElement.queryAll(By.css('app-radio'));

    const nuevoValor = component.radioOptions[0].value;

    radios[0].triggerEventHandler('modelValueChange', nuevoValor);
    fixture.detectChanges();

    expect(component.tipo).toBe(nuevoValor);
  });

  it('debería renderizar los labels correctamente', () => {
    fixture.detectChanges();
    const labels = fixture.nativeElement.querySelectorAll('app-radio');

    component.radioOptions.forEach((option, index) => {
      expect(labels[index].textContent).toContain(option.label);
    });
  });

  it('debería pasar el group correcto a cada app-radio', () => {
    fixture.detectChanges();
    const radios = fixture.debugElement.queryAll(By.css('app-radio'));

    radios.forEach((radioEl, index) => {
      const expectedGroup = component.radioOptions[index].group;
      expect(radioEl.attributes['ng-reflect-group']).toBe(expectedGroup);
    });
  });
});
