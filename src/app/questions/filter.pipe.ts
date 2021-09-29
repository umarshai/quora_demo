import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, QID:string) {
    if(value.length === 0 ){
      return value;
    }
    const searchr=[];
    for (const s of  value){
      
      
      if(s['id']===parseInt(QID)){
        searchr.push(s);
      }
    }
    return searchr;
    
  }

}
