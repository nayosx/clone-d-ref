import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleTableComponent } from './simple-table.component';

describe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el mensaje vacío cuando no hay datos', async () => {
    component.value = [];
    component.columns = [{ field: 'nombre', header: 'Nombre' }];
    fixture.detectChanges();

    await fixture.whenStable();

    const emptyMessage =
      fixture.nativeElement.querySelector('.empty-content h3');
    expect(emptyMessage?.textContent).toContain(
      'Por el momento no hay nada que informar'
    );
  });

  it('debería renderizar columnas y filas con datos', async () => {
    component.columns = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'edad', header: 'Edad' },
    ];
    component.value = [
      { nombre: 'Ana', edad: 25 },
      { nombre: 'Luis', edad: 30 },
    ];
    fixture.detectChanges();

    await fixture.whenStable();

    const headers = fixture.nativeElement.querySelectorAll('th');
    expect(headers.length).toBe(2);
    expect(headers[0].textContent).toContain('Nombre');
    expect(headers[1].textContent).toContain('Edad');

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Ana');
    expect(rows[1].textContent).toContain('Luis');
  });
});
