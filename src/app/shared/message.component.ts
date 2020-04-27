import { Component, OnInit, Input } from '@angular/core';
import { appProperties } from '../app.messages';

@Component({
  selector: 'app-message',
  template: `{{message}}`,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input() message;
  @Input() feature;

  ngOnInit(): void {
    this.message = this.feature ? appProperties[this.feature][this.message] : appProperties[this.message];
  }

}
