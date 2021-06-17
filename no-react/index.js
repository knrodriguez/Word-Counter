function calculateStats(e){
    const cursorStart = this.selectionStart;
    const cursorEnd = this.selectionEnd;
    const charCount = this.textLength
    console.log(e,cursorStart, cursorEnd)    
    console.log(this.textLength)
    console.log(stats);
    stats.set('charCount', charCount);
    updateStats();
}

function updateStats(){
    const charCountElem = document.getElementById('character-count');
    charCountElem.innerText = stats.charCount; 
}

function init(){
    const stats = new Stats();
    const inputTextElem = document.getElementById('input-text');
    inputTextElem.oninput = calculateStats.call(stats);
    inputTextElem.onchange = calculateStats.call(stats);

    console.log('START', inputTextElem.selectionStart)
}

init();