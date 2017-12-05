import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { DataSource } from '@angular/cdk/table';

import { DataServiceFactory } from 'app/services/data.service.factory';
import { ActivityService } from 'app/services/activity.service';
import { Activity } from 'app/models/activity';
import { DataService } from 'app/services/data.service';
import { AbstractTableComponent } from 'app/views/admin/table.abstract';
import { AuthenticationService } from 'app/services/authentication.service';
import { Constants } from 'app/services/constants';
import { ActivityDeleteComponent } from 'app/views/admin/activities/activity.delete';

@Component({
	selector: 'activity-table',
	styleUrls: ['../table.abstract.css'],
	templateUrl: 'activity.table.html',
	providers: [ActivityService]
})

export class ActivityTableComponent extends AbstractTableComponent implements OnInit {

	@Input() user: boolean = false;

	displayedColumns: Array<string> = ['name', 'description', 'schedule', 'provider', 'tags', 'target_groups', 'action'];
	dataSource: MatTableDataSource<Activity> = new MatTableDataSource<Activity>();

	constructor(
		protected dataService: ActivityService,
		protected constants: Constants,
		protected deleteDialog: MatDialog) {
		super(dataService, constants, deleteDialog);
	}

	fetchData(): void {
		this.user
			? this.dataService.getByProviders(this.tableState)
				.subscribe(data => this.handleResponse(data))
			: this.dataService.list(this.tableState)
				.subscribe(data => this.handleResponse(data));
	}

	handleOpeningDialog(row: any, name: string): void {
		this.openDialog(row, name, ActivityDeleteComponent);
	}

}
