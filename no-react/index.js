class Stats {
    constructor (charCount = 0, 
        wordCount = 0, 
        paraCount = 0){
        this.charCount = charCount;
        this.wordCount = wordCount;
        this.paraCount = paraCount;
    }

    get(prop){
        return !!this[prop] ? this[prop] : 'Property does not exist';
    }

    set(prop, val){
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

function init(){
    const stats = new Stats();

    console.log('START', inputTextElem.selectionStart)
    function calculateStats(e){
        const cursorStart = inputTextElem.selectionStart;
        const cursorEnd = inputTextElem.selectionEnd;
        const charCount = inputTextElem.textLength
        console.log(e,cursorStart, cursorEnd)    
        console.log(inputTextElem.textLength)
        updateStats(charCount);
    }

    function updateStats(charCount){
        const charCountElem = document.getElementById('character-count');
        charCountElem.innerText = charCount; 
    }
}