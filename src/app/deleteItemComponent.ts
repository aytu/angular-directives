import {Component,EventEmitter} from '@angular/core';
import {ItemList} from  './item-list';

@Component({
  selector:'deleteItem',
  template:`
    <label for="item-name">Name: </label>
    <input type="text" id="item-name" [(ngModel)]="selectedItem.name"/>
    <label for="item-amt">Amount: </label>
    <input type="number" id="item-amt" [(ngModel)]="selectedItem.amount"/>
    <button (click)="onDelete()" >Delete item</button>
  `,
  inputs:['selectedItem'],
  outputs:['deleted']
})

export class DeleteItemComponent {
  selectedItem={name: '',amount: 0};
  deleted=new EventEmitter<ItemList>();

  onDelete(){
    this.deleted.emit(this.selectedItem);
  }
}
