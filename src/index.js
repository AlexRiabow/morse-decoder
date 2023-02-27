const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var res = '';
    var letterRes = '';
    for (var i = 0;i<expr.length/10;i++){
        var symbolCode = expr.slice(i*10,10+i*10);
        if (symbolCode === '**********') {
            res += ' ';
            continue
        }
        for (var y = 0;y<5;y++){
            var symbolMorse = symbolCode.slice(y*2,2+y*2);
            if (symbolMorse === '10') letterRes += '.';
            if (symbolMorse === '11') letterRes += '-';
            else continue
        }
        for (key in MORSE_TABLE) {
            if (letterRes === key) {
                res += MORSE_TABLE[key];
            }
        }
        letterRes = '';
    }
    return res
    
}

module.exports = {
    decode
}