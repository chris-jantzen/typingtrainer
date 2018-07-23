function Trainer(textString) {
    this.listOfLetters = [];
    for (let letter of textString) {
        this.listOfLetters.push(new Letter(letter));
    }
    let printString = '';
    for (let i of this.listOfLetters) {
        printString += i.letter;
    }
    console.log(printString);

    let currentChar = 0;
    let start = Date.now();
    while(currentChar < this.listOfLetters.length) {
        /**
         * Take the keypress inputs from the UI and send the input character or
         * backspace from the user to the 'typed' property in the Letter class.
         */
        break;
    }
    let end = Date.now();
    /**
     * send start and end to the times table in the database for the python script to 
     * read out and calculate the amount of time it took to type the text.
     */

    let greenLetterCount = 0;
    let yellowLetterCount = 0;
    let redLetterCount = 0;
    for (let i of this.listOfLetters) {
        if (i.getColor() === '#39af07') greenLetterCount++;
        else if (i.getColor() === '#e8e80b') yellowLetterCount++;
        else redLetterCount++;
    }
    /**
     * Send each count to the "times" table of the database for the python script to
     * read out and calculate accuracy.
     */
}

let train = new Trainer('Example string of text.');
