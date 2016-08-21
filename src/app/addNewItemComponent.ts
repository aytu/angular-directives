import {Component,EventEmitter} from '@angular/core';
import {ItemList} from './item-list';

@Component({
  selector:'addNewItem',
  template:`
    <label for="item-name">Name: </label>
    <input type="text" id="item-name" [(ngModel)]="item.name"/>
    <label for="item-amt">Amount: </label>
    <input type="number" id="item-amt" [(ngModel)]="item.amount"/>
    <button (click)="onClick()" >Add new item</button>
  `,
  outputs:['added']
})

export class AddNewItemComponent{
   item={name:'',amount:0};
   added=new EventEmitter<ItemList>();
   onClick(){
     this.added.emit(this.item);
   }
}
