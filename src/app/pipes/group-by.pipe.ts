import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

    transform(value: Array<any>, field: string): Array<any> {

        const fields = field ? field.split(".") : [];

        const groupedObj = value.reduce((prev, cur) => {

            let key;

            for (let x = 0; x < fields.length; x++) {
                if (!key) {
                    key = cur[fields[x]];
                } else {
                    key = key[fields[x]];
                }
            }

            key = key.toLowerCase();

            if (!prev[key]) {
                prev[key] = [cur];
            } else {
                prev[key].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(key => ({key, value: groupedObj[key]}));
    }
}