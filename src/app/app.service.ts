import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private cardIdTracker = 0;

    getNewCardId() {
        return this.cardIdTracker++;
    }
}

