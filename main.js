function reverseString() {
    let originalString = prompt("Yazı daxil edin!");
    let reversed = '';

    if (originalString) { 
        for (let i = originalString.length - 1; i >= 0; i--) {
            reversed += originalString[i];
        }
        return `Original: ${originalString}\nReversed: ${reversed}`;
    } else {
        return "İnputu boş saxlamayın!";
    }
}

let result = reverseString();
console.log(result);
