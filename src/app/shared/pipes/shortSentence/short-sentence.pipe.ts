import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortSentence'
})
export class ShortSentencePipe implements PipeTransform {

    transform(value: string, length : number = 150): any {
        if (String(value).length < length) return value;
        return `${String(value).substr(0, length)}...`;
    }

}
