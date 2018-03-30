import { Component } from '@angular/core';

export class IEvent {
    //fielder
    private _uId: string;
    private _organizer: string;
    private _location: string;
    private _summary: string;
    private _dtStart: string;
    private _dtEnd: string;
    private _description: string;
    private _dtStamp: string;

    //constructor 
    constructor(){}
    /*constructor(uid: string, organizer: string, summary: string,
        dtStart: string, dtEnd: string, dtStamp: string,
        location: string, description: string) {
        this._uId = uid;
        this._organizer = organizer;
        this._location = location;
        this._summary = summary;
        this._dtStart = dtStart;
        this._dtEnd = dtEnd;
        this._description = description;
        this._dtStamp = dtStamp;
    }*/

    // setter und getter methods
    get uid(): string {
        console.log("Get uId : ", this._uId);
        return this._uId;
    }
    set uid(value: string) {
        console.log("Set uId : ", value);
        this._uId = value;
    }

    get organizer(): string {
        console.log("Get organizer : ", this._organizer);
        return this._organizer;
    }

    set organizer(value: string) {
        console.log("Set organizer : ", value);
        this._organizer = value;
    }

    get location(): string {
        console.log("Get location : ", this._location);
        return this._location;
    }

    set location(value: string) {
        console.log("Set location : ", value);
        this._location = value;
    }

    get summary(): string {
        console.log("Get summary : ", this._summary);
        return this._summary;
    }
    set summary(value: string) {
        console.log("Set summary : ", value);
        this._summary = value;
    }

    get dtStart(): string {
        console.log("Get dtStart : ", this._dtStart);
        return this._dtStart;
    }
    set dtStart(value: string) {
        console.log("Set dtStart : ", value);
        this._dtStart = value;
    }

    get dtEnd(): string {
        console.log("Get dtEnd : ", this._dtEnd);
        return this._dtEnd;
    }
    set dtEnd(value: string) {
        console.log("Set dtEnd : ", value);
        this._dtEnd = value;
    }

    get description(): string {
        console.log("Get description : ", this._description);
        return this._description;
    }

    set description(value: string) {
        console.log("Set description : ", value);
        this._description = value;
    }

    get dtStamp(): string {
        console.log("Get dtStamp : ", this._dtStamp);
        return this._dtStamp;
    }
    set dtStamp(value: string) {
        console.log("Set dtStamp : ", value);
        this._dtStamp = value;
    }

    //function 
    disp(): void {
        console.log("Function displays Engine is  :   " + this._uId)
    }

} 