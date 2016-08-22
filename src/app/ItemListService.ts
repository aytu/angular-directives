import {Injectable} from '@angular/core';
import {Items} from './mock-itemlist';
import {ItemList} from './item-list';
export class ItemListService{
   getItems(){
     return Items;
   }
   InsertItem(item:ItemList){
     Items.push({name:item.name,amount:item.amount});
   }
   DeleteItem(item:ItemList){
     Items.splice(Items.indexOf(item),1);
   }
}
