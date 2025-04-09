import { ComponentFixture, TestBed } from '@angular/core/testing';
import PagosComponent from './pagos.component';
import { Component, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';


@Component({
    selector: 'app-info-card',
    standalone: true,
    template: '',
})
class MockInfoCardComponent {
    @Input() infoList: any;
}


@Component({
    selector: 'app-aprobadores-table',
    standalone: true,
    template: '',
})
class MockAprobadoresTableComponent {
    @Input() columns: any;
    @Input() value: any;
}

describe('PagosComponent', () => {
    let component: PagosComponent;
    let fixture: ComponentFixture<PagosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PagosComponent, MockInfoCardComponent, MockAprobadoresTableComponent],
            providers: [DialogService, ConfirmationService]
        }).compileComponents();

        fixture = TestBed.createComponent(PagosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debería crearse', () => {
        expect(component).toBeTruthy();
    });

    it('debería renderizar 2 app-info-card', () => {
        component.infoCards = [];
        fixture.detectChanges();

        const infoCards = fixture.nativeElement.querySelectorAll('app-info-card');
        expect(infoCards.length).toBe(2);
    });

    //   it('debería pasar los inputs correctos a app-aprobadores-table', () => {
    //     const mockAprobadores = [
    //       { operador: 'Oscar', aprobar: false, rechazar: false },
    //     ];
    //     component.aprobadores = mockAprobadores;
    //     fixture.detectChanges();

    //     const tableDebug = fixture.debugElement.nativeElement.querySelector('app-aprobadores-table');
    //     expect(tableDebug).toBeTruthy();
    //   });
});
