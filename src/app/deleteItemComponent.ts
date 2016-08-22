import {Component,EventEmitter} from '@angular/core';
import {ItemList} from  './item-list';
import {ItemListService} from './ItemListService';

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
  outputs:['deletedItem'],
  providers:[ItemListService]
})

export class DeleteItemComponent {
  constructor(private _itemListService:ItemListService){}
  selectedItem={name: '',amount: 0};
  deletedItem=new EventEmitter<any>();
  onDelete(){
    this._itemListService.DeleteItem(this.selectedItem);
    this.deletedItem.emit(null);
  }
}
