import { Component,OnInit } from '@angular/core';
import {AddNewItemComponent} from './addNewItemComponent';
import {DeleteItemComponent} from './deleteItemComponent';
import {ItemList} from './item-list';
import {ItemListService} from './ItemListService';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <div class="body">
      <section>
         <addNewItem></addNewItem>
      </section>
      <hr>
      <section>
         <h2>List</h2>
         <ul>
           <li *ngFor="let item of itemList" (click)="onSelect(item)">{{item.name}} ({{item.amount}})</li>
         </ul>
      </section>

      <section *ngIf="selectedItem != null">
         <deleteItem [selectedItem]="selectedItem" (deletedItem)="onDelete($event)"></deleteItem>
      </section>
      {{title}}
  </div>

  `,
  styleUrls: ['app.component.css'],
  directives:[AddNewItemComponent,DeleteItemComponent],
  providers:[ItemListService]
})
export class AppComponent implements OnInit {
  constructor(private _itemListService: ItemListService){ }
  itemList=new Array<ItemList>();
  selectedItem:ItemList;
  ngOnInit(){
    this.itemList=this._itemListService.getItems();
  }
  onDelete(item:ItemList){
    this.selectedItem=null;
  }

  onSelect(item:ItemList){
      this.selectedItem=item;
  }
}
