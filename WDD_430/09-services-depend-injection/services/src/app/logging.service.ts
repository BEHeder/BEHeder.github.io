import { Injectable } from "@angular/core";

@Injectable() //Make it a habit to always add this to your Services, so something doesn't break later
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}