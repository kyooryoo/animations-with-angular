import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
} from '@angular/animations';
import { fadeAnimation } from './animations';

@Component({
  selector: 'fadeblock',
  template: `
    <div
      class="fadeBlock mx-auto"
      (mousedown)="setMouse('press')"
      [@changeState]="currentState"
    ></div>
    <div class="msgbox mx-auto">{{ msg }}</div>
  `,
  styles: [
    `
      .fadeBlock {
        background-color: #ec971f;
        width: 600px;
        height: 300px;
        border-radius: 4px;
        margin: 5rem;
        opacity: 0;
      }
      .msgbox {
        margin: 2rem;
        padding-top: 2rem;
        font-size: 1.2rem;
        text-align: center;
      }
    `,
  ],
  animations: [
    trigger('changeState', [
      transition('void => *', [
        useAnimation(fadeAnimation, {
          params: {
            delay: '1000ms',
            from: 1,
            to: 0,
            time: '2000ms',
          },
        }),
      ]),
    ]),
  ],
})
export class FadeBlockComponent {
  currentState = 'void';
  msg = 'Click the center of the screen to start the animation';
  setMouse(state) {
    this.currentState = state;
  }
}
