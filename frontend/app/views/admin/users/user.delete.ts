import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DataServiceFactory, OrganisationService } from 'app/services/data.service.factory';
import { ProviderService } from 'app/services/provider.service';
import { Constants } from 'app/services/constants';

@Component({
	templateUrl: '../dialog/dialog.delete.html',
	providers: [ProviderService]
})

export class UserDeleteComponent {

	constructor(
		public constants: Constants,
		public dialogRef: MatDialogRef<UserDeleteComponent>,
		protected service: ProviderService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	onDelete(): void {
		this.service.delete(this.data.id);
		this.dialogRef.close();
	}

	onCancel(): void {
		this.dialogRef.close();
	}
}


