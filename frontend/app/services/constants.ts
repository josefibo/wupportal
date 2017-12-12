import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

	// --------------------------
	// LABELS
	// --------------------------

	public back: string = 'Zurück';
	public newElement: string = 'Neu';
	public cancel: string = 'Abbrechen';
	public newEntry: string = 'Neuen Eintrag anlegen';

	public next: string = 'Nächste';
	public previous: string = 'Vorherige';
	public items: string = 'Einträge';
	public of: string = 'von';
	public per: string = 'pro';

	public login: string = 'anmelden';
	public loginTitle: string = 'Login';
	public register: string = 'registrieren';
	public userName: string = 'Username';
	public password: string = 'Passwort';
	public newPassword: string = 'Neues Passwort';
	public confirmPassword: string = 'Passwort wiederholen';

	public filter: string = 'Filter';
	public configuration: string = 'Einstellungen';

	public approved: string = 'Bestätigt';
	public createdAt: string = 'Erstellt';
	public save: string = 'Speichern';
	public select: string = 'Auswählen';
	public delete: string = 'Löschen';
	public deleteAll: string = 'Alle Einträge löschen';
	public change: string = 'Ändern';
	public edit: string = 'Bearbeiten';
	public chosen: string = 'Ausgewählt';
	public choose: string = 'wählen Sie';
	public create: string = 'Erstelle';
	public frequently: string = 'Regelmäßig';

	public coreData: string = 'Stammdaten';
	public own: string = 'Eigene';

	public deleteMessage: string = 'Möchten Sie den folgenden Eintrag wirklich löschen?';
	public isRequiredMessage: string = 'Feld darf nicht leer sein';
	public emailFormatMessage: string = 'Feld muss Email Format haben';
	public notSamePasswordMessage: string = 'Passwörter stimmen nicht überein';
	public orAreEmptyMessage: string = 'oder sind leer';
	public beginn: string = 'Anfang';
	public end: string = 'Ende';
	public deleteFromOrganisation: string = 'Aus Organisation entfernen';
	public wrongCredentialsMessage: string = 'Kein Nutzer mit diesem Password gefunden';
	public multipleOrganisationMessage: string = 'Sie sind Administrator für mehere Organisationen';
	public pleaseSelectMessage: string = 'Bitte wählen Sie eine aus:';

	public website: string = 'Webseite';
	public description: string = 'Beschreibung';
	public nameString: string = 'Name';
	public fullname: string = 'Vor- und Nachname';
	public phone: string = 'Telefon';
	public mail: string = 'Email';
	public address: string = 'Adresse';
	public street: string = 'Straße';
	public postalCode: string = 'PLZ';
	public place: string = 'Ort';
	public houseNumber: string = 'Hausnummer';
	public quarter: string = 'Viertel';
	public longitude: string = 'Längengrad';
	public latitude: string = 'Breitengrad';
	public dates: string = 'Termine';
	public noFutureDates: string = 'Keine zukünftigen Termine';
	public weekDays: string = 'Wochentage';
	public tags: string = 'Tags';
	public targetGroups: string = 'Zielgruppen';
	public category: string = 'Kategorie';

	public organisations: string = 'Organisationen';
	public organisation: string = 'Organisation';
	public organisationAdmin: string = 'Organisation verwalten';
	public users: string = 'Anbieter';
	public user: string = 'Anbieter';
	public activities: string = 'Aktivitäten';
	public activity: string = 'Aktivität';
	public account: string = 'Konto';
	public admin: string = 'Admin';
	public userManagement: string = 'Nutzerverwaltung';


	public error: string = 'Fehler';

	// --------------------------
	// TABLE
	// --------------------------

	public defaultPageSize: number = 25;
	public pageSizeOptions: Array<number> = [5, 10, 25, 50, 100];

	// --------------------------
	// URLs
	// --------------------------

	public userURL: string = '(table:users)';
	public orgaAdminURL: string = '(table:organisation-admin)';
}
