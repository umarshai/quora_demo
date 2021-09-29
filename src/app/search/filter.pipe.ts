import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchi:string) {
    if(value.length === 0 ){
      console.log(searchi);
      return value;
    }
    const searchr=[];
    for (const s of  value){
      if(s['question']===searchi){
        searchr.push(s);
      }
      var a =s['question'].split(" ");
      for (const g of  a){
        if(g===searchi){
          
          searchr.push(s);

        }

      }

      
     
    }
    return searchr;
    
  }

}
