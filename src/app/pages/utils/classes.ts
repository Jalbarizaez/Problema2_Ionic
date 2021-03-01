export class Classes {
}
import { element } from 'protractor';

export class CustomList<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    addIfNotExist(value: T): boolean{
        if(!this.items.includes(value))
        {
            this.items.push(value);
            return true;
        }
        else { return false }
    }

    get(index: number): T {
        return this.items[index];
    }

    getAll(): Array<T>{
        return this.items;
    }

    deleteIndex(index: number): boolean {
        if(index < this.items.length){
            let temp = [];
            for (let idx = 0; idx < index ; idx++) {
                temp.push(this.items[idx]);
            }
            for (let idx = index+1; idx < this.items.length; idx++){
                temp.push(this.items[idx]);
            }
            this.items = temp;
            return true;
        }
        else { return false }
    }

    deleteValue(value: T): boolean {
        if(this.items.includes(value)){
            let temp = [];
            this.items.forEach( element => {
                if (element!=value) temp.push(element);
            });
            this.items = temp;
            return true;
        }
        else { return false }
    }
}
