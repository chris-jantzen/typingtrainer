function Letter(letter) {
    this.letter = letter;

    const colors = {
        red: '#f44242',
        green: '#39af07',
        yellow: '#e8e80b',
        black: '#000000'
    }
    
    let textColor = colors.black;

    this.getColor = () => {
        return textColor;
    }

    const checkCorrect = typed => {
        return typed === this.letter;
    }

    Object.defineProperty(this, 'typed', {
        set: typed => {
            // Takes the typed value and uses the color to decide if
            // what color to make the character if they got it correct
            // the first try, it turns green. If it was corrected to the correct
            // character after being incorrect, it turns yellow. If it is incorrect,
            // then the text turns red.
            if (checkCorrect(typed) && (textColor === colors.black || textColor === colors.green)) {
                textColor = colors.green;
            }
            else if (checkCorrect(typed) && textColor === colors.red) {
                textColor = colors.yellow;
            }
            else {
                textColor = colors.red;
            }
            console.log(textColor);
        }
     });
}
