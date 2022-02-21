import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements AfterViewInit, OnInit {
  public problemsList: Observable<any> = this.facade.allProblems$;
  public ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['id', 'problem_name', 'room', 'status_name'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private facade: problemsFacade) {}

  ngOnInit(): void {
    this.facade.dispatchAllProblems();
  }

  ngAfterViewInit() {
    this.problemsList.subscribe((problems) => {
      this.dataSource.data = problems;
      console.log(problems);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
