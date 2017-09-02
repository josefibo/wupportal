import { Component, Input } from '@angular/core';

import { Selectable } from '../../model/forms/selectable';

@Component({
	selector: 'checkbox-area',
	templateUrl: './checkbox-area.component.html'
})
export class CheckboxAreaComponent {
	@Input() selectables: Selectable[];
}