import {Pipe,PipeTransform} from '@angular/core';
import {ItemList} from './item-list';

@Pipe({
  name:'myfilter'
})

export class FilterPipe implements PipeTransform{
   transform(value: ItemList[],args:string[]):any{
     if(args.length==0){
       return value;
     }
     let resultArray=[];
     for(let item of value){
       if(item.name.match('^.*' +args[0]+ '.*$')){
          resultArray.push(item);
       }
     }
     return resultArray;
   }
}
