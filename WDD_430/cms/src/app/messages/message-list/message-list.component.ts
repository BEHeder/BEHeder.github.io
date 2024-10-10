import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [
    new Message(11, 'The', 'was here!', 'Shadoki Master'),
    new Message(12, 'Who?', 'Who is this?', 'Bryan Heder'),
    new Message(13, 'You Know', 'You know who I am.', 'Shadoki Master')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
