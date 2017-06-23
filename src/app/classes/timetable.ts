import {Lesson} from './lesson';

export class Timetable {

    days: string[];
    maxHour: number;
    lessons: any[];

    getHours() {
        const hours = [];
        for (let i = 1; i <= this.maxHour; i++) {
            hours.push(i);
        }
        console.log(hours);
        return hours;
    }
}
