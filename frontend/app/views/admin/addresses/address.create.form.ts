import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidationService } from 'app/services/validation.service';

import { Address } from 'app/models/address';
import { Constants } from 'app/services/constants';


@Component({
	templateUrl: 'address.create.form.html',
})

export class AddressCreateFormComponent {

	address: Address;

	constructor(
		public constants: Constants,
		public dialogRef: MatDialogRef<AddressCreateFormComponent>,
		public validation: ValidationService,
		@Inject(MAT_DIALOG_DATA) public data: any,
	) {
		this.address = this.data.address;
	}

	onNoClick(): void {
	}

	cancel(): void {
		this.dialogRef.close(null);
	}

	onSubmit(): void {
		this.dialogRef.close(this.address);
	}
}


