import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
];

rowData: Observable<any[]> | undefined;
  title: any;

constructor(private http: HttpClient) {
}

ngOnInit(): void {
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
}
}
