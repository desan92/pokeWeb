import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacePipe'
})
export class ReplacePipePipe implements PipeTransform {

  transform(value: string): string {
    let name = "";

    for(let i = 0; i < value.length; i++)
    {
      name += value[i].replace("-", " ");
    }
    
    return name;
  }

}
