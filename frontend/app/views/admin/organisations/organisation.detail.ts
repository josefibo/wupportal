import { Component, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';

import { Constants } from 'app/services/constants';
import { Organisation } from 'app/models/organisation';


@Component({
	selector: 'organisation-detail',
	templateUrl: 'organisation.detail.html',
	styleUrls: ['../../../app.component.css']
})

export class OrganisationDetailComponent implements OnChanges {

	@Input() organisation: Organisation;

	constructor(
		public constants: Constants
	) { }

	ngOnChanges(changes: SimpleChanges): void {
		const organisation: SimpleChange = changes.organisation;
		this.organisation = organisation.currentValue;
	}

}
