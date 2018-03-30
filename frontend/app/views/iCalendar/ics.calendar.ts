import { Component } from '@angular/core';

import { IEvent } from 'app/views/iCalendar/ics.event';

export class ICalendar {
    //fielder
    private _version: string;
    private _prodId: string;
    private _method: string;
    private _event: IEvent [];

    //constructor 
    constructor(){}
    /*constructor(version: string, prodId: string, method: string, event: IEvent []) {
        this._version = version;
        this._prodId = prodId;
        this._method = method;
        this._event = event;
    }*/

    // setter und getter methods
    get version(): string {
        console.log("Get version : ", this._version);
        return this._version;
    }

    set version(value: string) {
        console.log("Set version : ", value);
        this._version = value;
    }

    get prodId(): string {
        console.log("Get prodId : ", this._prodId);
        return this._prodId;
    }

    set prodId(value: string) {
        console.log("Set prodId : ", value);
        this._prodId = value;
    }

    get method(): string {
        console.log("Get method : ", this._method);
        return this._method;
    }

    set method(value: string) {
        console.log("Set method : ", value);
        this._method = value;
    }

    get event(): IEvent[] {
        console.log("Get event : ", this._event);
        return this._event;
    }
    set event(value: IEvent[]) {
        console.log("Set event : ", value);
        this._event = value;
    }

    //function 
    disp(): void {
        console.log("Function displays Engine is  :   " + this._version)
    }
    
} 