import { Component } from '@angular/core';
import {AddNewItemComponent} from './addNewItemComponent';
import {DeleteItemComponent} from './deleteItemComponent';
import {ItemList} from './item-list';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <div class="body">
      <section>
         <addNewItem (added)="addItem($event)"></addNewItem>
      </section>
      <hr>
      <section>
         <h2>List</h2>
         <ul>
           <li *ngFor="let item of itemList" (click)="onSelect(item)">{{item.name}} ({{item.amount}})</li>
         </ul>
      </section>

      <section *ngIf="selectedItem != null">
         <deleteItem [selectedItem]="selectedItem" (deleted)="onDelete($event)"></deleteItem>
      </section>
      {{title}}
  </div>

  `,
  styleUrls: ['app.component.css'],
  directives:[AddNewItemComponent,DeleteItemComponent]
})
export class AppComponent {
  itemList=new Array<ItemList>();
  selectedItem:ItemList;
  addItem(item: ItemList){
     this.itemList.push({name:item.name,amount:item.amount})
  }
  onDelete(item:ItemList){
    this.itemList.splice(this.itemList.indexOf(item),1);
    this.selectedItem=null;
  }
  onSelect(item:ItemList){
    console.log(item);
    this.selectedItem=item;
  }
}
