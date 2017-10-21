import { Input, Output, EventEmitter } from "@angular/core";

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    styleUrls: [],
    templateUrl: './list.component.html'
})
export class ListComponent {
    @Input() items: Array<any>;
    @Output() onItemSelected: EventEmitter<any>;

    constructor() {
        this.items = [];
        this.onItemSelected = new EventEmitter<any>();
        this.items.push({name:'hello world'});
    }

    onItemClick(item: any): void {
        this.onItemSelected.emit(item);
    }
}