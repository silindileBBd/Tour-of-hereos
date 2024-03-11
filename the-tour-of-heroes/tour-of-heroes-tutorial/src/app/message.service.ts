import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string = '';

  add(message: string) {
    if (this.message.length > 0) {
      this.message = '';
    }

    this.message += message;
  }

  clear() {
    this.message = '';
  }
}
