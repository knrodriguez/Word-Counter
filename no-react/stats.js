export class Stats {
    constructor (charCount = 0, 
        wordCount = 0, 
        paraCount = 0
    ){
        this.charCount = charCount;
        this.wordCount = wordCount;
        this.paraCount = paraCount;
    }

    get(prop) {
        return !!this[prop] ? this[prop] : 'Property does not exist';
    }

    set(prop, val) {
        if(!!this[prop]){
            this[prop] = val;
            return this;
        } return 'Property does not exist';
    }

    increment(prop){
        if(!!this[prop]){
            this[prop] += 1;
            return this;
        } return 'Property does not exist'
    }

    decrement(prop) {
        if(!!this[prop]){
            this[prop] -= 1;
            return this;
        } return 'Property does not exist'
    }
}
