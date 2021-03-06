
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Constants } from 'app/services/constants';

@Component({
	templateUrl: 'organisation-selection.dialog.html'
})
export class OrganisationSelectionComponent {

	private selectedOrgaID: string;

	constructor(
		public constants: Constants,
		public dialogRef: MatDialogRef<OrganisationSelectionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	onSelect(): void {
		this.dialogRef.close(this.selectedOrgaID);
	}

	onCancel(): void {
		this.dialogRef.close();
	}

}
