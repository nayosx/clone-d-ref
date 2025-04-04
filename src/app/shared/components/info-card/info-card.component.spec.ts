import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar correctamente los elementos de infoList', () => {
    component.infoList = [
      { label: 'Nombre', value: 'Ana' },
      { label: 'Edad', value: '30' },
    ];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('.info-row');
    expect(rows.length).toBe(2);

    expect(rows[0].querySelector('.label').textContent).toContain('Nombre');
    expect(rows[0].querySelector('.value').textContent).toContain('Ana');

    expect(rows[1].querySelector('.label').textContent).toContain('Edad');
    expect(rows[1].querySelector('.value').textContent).toContain('30');
  });

  it('debería no renderizar nada si infoList está vacío', () => {
    component.infoList = [];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('.info-row');
    expect(rows.length).toBe(0);
  });
});
