import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-simple-table',
  imports: [TableModule, CheckboxModule, PaginatorModule, ProgressBarModule],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss',
})
export class SimpleTableComponent implements OnInit {
  @Input() value: any[] = [];
  @Input() loading: boolean = false;
  @Input() columns: { field: string; header: string }[] = [];
  @Input() rows = 10;
  @Input() totalRecords = 0;
  @Input() currentPage = 0;

  @Output() selectionChange = new EventEmitter<any[]>();

  readyToRender = false;

  ngOnInit() {
    setTimeout(() => {
      this.readyToRender = true;
    }, 0);
  }
}
