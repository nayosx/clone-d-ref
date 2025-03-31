import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagosStateService {
  private cambios = signal<Map<string, any>>(new Map());
  guardarCambio(pago: any) {
    const nuevosCambios = new Map(this.cambios());
    nuevosCambios.set(pago.id, pago); // Reemplaza si ya existe
    this.cambios.set(nuevosCambios);
    console.log('Cambios:', this.cambios());
  }

  getCambios(): any[] {
    return Array.from(this.cambios().values());
  }

  limpiarCambios() {
    this.cambios.set(new Map());
  }

  tieneCambios(): boolean {
    return this.cambios().size > 0;
  }

  quitarCambio(id: string) {
    const nuevosCambios = new Map(this.cambios());
    nuevosCambios.delete(id);
    this.cambios.set(nuevosCambios);
    console.log(`Cambio con id ${id} eliminado.`);
  }
}
