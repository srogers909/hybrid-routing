import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'todo-item',
    template: `<p>{{label}}</p>`,
    encapsulation: ViewEncapsulation.Native
})
export class TodoItemComponent {
    static NAME: string = 'TodoItemComponent';

    constructor() {

    }
}