import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from 'app/core/datas/datas.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'edit', 'delete'];

  dataSource = [];

  constructor(public _datas: DatasService, private router: Router) {
    this._datas.getAll().subscribe((resp) => {
      this.dataSource = resp.data;
    });
  }

  ngOnInit() {
  }

  edit(id: number) {
    this.router.navigate(['/edit/' + String(id)]);
  }

  delete(id: number) {
    this._datas.deleteId(id).subscribe((resp) => {
      this.router.navigate(['/report']);
    });
  }

}