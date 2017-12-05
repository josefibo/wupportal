import { OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, Sort, PageEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { DataServiceFactory, UserService } from 'app/services/data.service.factory';
import { DataService } from 'app/services/data.service';
import { TableState } from 'app/models/table.state';
import { DataResponse } from 'app/models/data.response';
import { Constants } from 'app/services/constants';
import { DialogComponent } from 'app/views/admin/popup/popup.component';

export abstract class AbstractTableComponent implements OnInit {

	@ViewChild(MatPaginator)
	protected paginator: MatPaginator;

	@ViewChild(MatSort)
	protected sort: MatSort;

	protected abstract displayedColumns: Array<string> = [];
	protected abstract dataSource: MatTableDataSource<any>;
	protected deleteDialog: MatDialog;
	protected tableState: TableState;
	protected constants: Constants;
	protected dataService: DataService;

	constructor(dataService: DataService, constants: Constants, deleteDialog: MatDialog) {
		this.dataService = dataService;
		this.constants = constants;
		this.deleteDialog = deleteDialog;
		this.tableState = new TableState(constants.defaultPageSize, constants.pageSizeOptions);
	}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.fetchData();
	}

	handleFiltered(changedEvent: any): void {
		this.tableState.setFilter(changedEvent.target.value);
		this.fetchData();
	}

	handlePageChanged(event: PageEvent): void {
		this.tableState.setPagination(event);
		this.fetchData();
	}

	handleSorted(event: Sort): void {
		this.paginator.pageIndex = 0;
		this.tableState.setSorting(event);
		this.fetchData();
	}

	fetchData(): void {
		this.dataService.list(this.tableState)
			.subscribe(data => this.handleResponse(data));
	}

	handleResponse(response: DataResponse): void {
		this.dataSource.data = response.records;
	}

	handleOpeningDialog(row: any, name: string): void {
		this.openDialog(row, name, DialogComponent);
	}

	openDialog(row: any, name: string, component: any): void {
		console.log('component', component);
		const dialogRef = this.deleteDialog.open(component, {
			width: '250px',
			data: {
				name: name,
				message: this.constants.deleteMessage,
				id: row.id
			}
		});

		// dialogRef.afterClosed().subscribe(result => {
		// 	console.log('result', result);
		// });
	}
}
