import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MappingComponent } from 'app/views/mapping/map';
import { LoginFormComponent } from 'app/views/admin/login/login.form';
import { AdminComponent } from 'app/views/admin/admin.component';
import { UserFormComponent } from 'app/views/admin/users/user.form';
import { OrganisationFormComponent } from 'app/views/admin/organisations/organisation.form';
import { OrganisationAdminComponent } from 'app/views/admin/organisations/organisation.admin';
import { ActivityFormComponent } from 'app/views/admin/activities/activity.form';
import { ActivityTableComponent } from 'app/views/admin/activities/activity.table';
import { UserTableComponent } from 'app/views/admin/users/user.table';
import { AddressTableComponent } from 'app/views/admin/addresses/address.table';
import { AddressFormComponent } from 'app/views/admin/addresses/address.form';
import { OrganisationsTableComponent } from 'app/views/admin/organisations/organisation.table';
import { ConfigFormComponent } from 'app/views/admin/configs/config.form';
import { AuthenticationService } from 'app/services/authentication.service';
import { RegisterFormComponent } from 'app/views/admin/users/register.form';
import { IcsComponent } from 'app/views/iCalendar/ics.component';

@NgModule({
	imports: [RouterModule.forRoot([
		{ path: '', component: MappingComponent },
		{ path: 'login', component: LoginFormComponent },
		{ path: 'ics', component: IcsComponent },
		{ path: 'register', component: RegisterFormComponent },
		{
			path: 'admin', component: AdminComponent, canActivate: [AuthenticationService], children: [
				{ path: '', component: ActivityTableComponent, outlet: 'table' },
				{ path: 'activities', component: ActivityTableComponent, outlet: 'table' },
				{ path: 'users', component: UserTableComponent, canActivate: [AuthenticationService], outlet: 'table' },
				{ path: 'addresses', component: AddressTableComponent, canActivate: [AuthenticationService], outlet: 'table' },
				{ path: 'configurations', component: ConfigFormComponent, canActivate: [AuthenticationService], outlet: 'table' },
				{ path: 'organisations', component: OrganisationsTableComponent, outlet: 'table' },
				{ path: 'organisation-admin/:id', component: OrganisationAdminComponent, canActivate: [AuthenticationService], outlet: 'table' },
				{ path: 'account', component: UserFormComponent, outlet: 'table' }
			]
		},
		{ path: 'activity/edit/:id', component: ActivityFormComponent },
		{ path: 'organisation/edit/:id', component: OrganisationFormComponent },
		{ path: 'address/edit/:id', component: AddressFormComponent },

		// { path: '**', redirectTo: '' }
	])],
	exports: [RouterModule]
})

export class AppRouterModule { }
