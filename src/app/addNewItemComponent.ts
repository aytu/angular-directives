import {Component,EventEmitter,OnInit} from '@angular/core';
import {ItemList} from './item-list';
import {ItemListService} from './ItemListService';
import {FormBuilder,ControlGroup,Validators,Control} from '@angular/common'
@Component({
  selector:'addNewItem',
  template:`
  <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
      <label for="item-name">Name: </label>
      <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']"/>
      <label for="item-amt">Amount: </label>
      <input type="number" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']"/>
      <button type="submit"  [disabled]="!myForm.valid" >Add new item</button>
  </form>

  `,
  styles:[`
     label{
       display:block;
     }
     button{
       padding:4px;
       cursor:pointer;
       border-radius:5px;
       background-color:lightblue;
       display:inherit;
       margin-top:10px;
     }
    `],

  providers:[ItemListService]
})

export class AddNewItemComponent implements OnInit{
  myForm: ControlGroup;
  constructor(private _itemListService:ItemListService,private builder: FormBuilder){}
   item={name:'',amount:0};
   ngOnInit(){
     this.myForm=this.builder.group({
       'itemName':['',Validators.required],
       'itemAmount':['',Validators.compose([
         Validators.required,
         greaterZero
       ])]
     })
   }
   onSubmit(){
      this._itemListService.InsertItem(this.item);
   }

}

function greaterZero(control:Control):{[s:string]:boolean}{
   if(control.value<=0){
     return {notEnough:true};
   }
}
