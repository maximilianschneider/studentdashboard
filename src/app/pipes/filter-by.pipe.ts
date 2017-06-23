import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

    private hasValue(object, value) {
        console.log(object);
        console.log(value);

        let hasValue = false;
        if (!value || value.trim() === '') {
            hasValue = true;
        } else {
            if (typeof object === 'object') {

                const objectKeys = Object.keys(object);
                for (const index in objectKeys) {
                    if (objectKeys.hasOwnProperty(index)) {
                        const key = objectKeys[index];
                        if (object.hasOwnProperty(key)) {
                            hasValue = this.hasValue(object[key], value);
                            if (hasValue) {
                                break;
                            }
                        }
                    }
                }
            } else if (object instanceof Array) {

                for (let x = 0; x < object.length; x++) {
                    hasValue = this.hasValue(object[x], value);
                    if (hasValue) {
                        break;
                    }
                }

            } else {
                console.log(object);
                console.log(value);
                console.log(object.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    value.toLowerCase().indexOf(object.toLowerCase()) !== -1);
                hasValue = object && (object.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    value.toLowerCase().indexOf(object.toLowerCase()) !== -1);
            }
        }

        return hasValue;
    }

    transform(items: any[], value: string): any[] {

        return items.filter(
            item => this.hasValue(item, value)
        );
    }
}
