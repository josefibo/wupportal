import { Component } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { Schedule } from '../../models/schedule';
import { Address } from '../../models/address';
import { ICalendar } from './ics.calendar';
import { IEvent } from './ics.event';

@Component({
    templateUrl: 'ics.component.html',
    // providers: [ActivityService]
})

export class IcsComponent {

    private activityID: string;
    private activity: Activity;
    private icalendar: ICalendar;
    private entry: Schedule[];
    private arrEvent: IEvent[];
    private ievent: IEvent;

    constructor(
        private activityService: ActivityService,
    ) { }

    public exportToIcs(): void {
        console.log("activityId", this.activityID);
        this.activityService.get(this.activityID).subscribe(result => {
            this.activity = result;
            let icalendar = new ICalendar();

            icalendar.version = "2.0";
            this.icalendar.prodId = "http://localhost:4200/ics";
            this.icalendar.method = "PUBLISH";

            this.entry = this.activity.schedules;

            for (var element of this.entry) {
                this.ievent = new IEvent();
                this.ievent.dtStart = element.start_date;
                this.ievent.dtEnd = element.end_date;
                this.ievent.description = this.activity.description;
                this.ievent.location = this.activity.address.place;
                if (this.activity.provider.organisation_id == this.activity.provider.organisation.id) {
                    this.ievent.organizer = this.activity.provider.organisation.name;
                }
                this.ievent.uid = this.activity.id;
                this.ievent.summary = this.activity.description;

                this.arrEvent.push(this.ievent);
            }

            this.icalendar.event = this.arrEvent;
        });
    }
}

