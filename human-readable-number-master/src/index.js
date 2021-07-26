module.exports = function toReadable (number) {
    let phrase;
    let ones;
    let teens;
    let tens;
    let hundred;
    let onesArr=['zero','one','two','three','four','five','six','seven','eight','nine'];
    let teensArr=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tensArr=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    function searchOnes (number) {
        for(let i = 0; i < onesArr.length; i++) {
            if (number === i) {
                ones = onesArr[i];
                return phrase = `${ones}`;
            }
        }
    }
    function searchTeens (number) {
        for(let i = 0; i < teensArr.length; i++) {
            if (number-10 === i) {
                teens = teensArr[i];
                return phrase = `${teens}`;
            }
        }
    }
    function searchTens (number) {
        if (number%10 === 0) {
            for(let i = 0; i < tensArr.length; i++) {
                if (Math.floor(number/10) === i) {
                     tens = tensArr[i];
                     return phrase = `${tens}`;
                }
            }
        }
        else {
            ones = number%10;
            tens = Math.floor(number/10);
            searchOnes(ones);
            for(let i = 0; i < tensArr.length; i++) {
                if(tens === i)
                tens = tensArr[i];
            }
            return phrase = `${tens} ${ones}`;
        }
    }
    function searchHundred(number) {
        if (number%100 === 0) {
            hundred = number/100;
            searchOnes(hundred);
            return phrase = `${ones} hundred`;
        }
        else {
           let remainder = number%100;
           hundred = Math.floor(number/100);
           for(let i = 0; i < onesArr.length; i++) {
                if(hundred === i) {
                    hundred = onesArr[i];
                }
           }
           for(let i = 0; i < tensArr.length; i++) {
                if (Math.floor(number/100) === i) {
                hundert = onesArr[i];
                return phrase = `${hundred} hundred`;
                }
            
            if (remainder > 0 && remainder < 10) {
                searchOnes(remainder);
                return phrase = `${hundred} hundred ${ones}`
            }
            else if (remainder >=10 && remainder < 20) {
                searchTeens(remainder);
                return phrase = `${hundred} hundred ${teens}`
            }
            else if (remainder%10 === 0) {
                searchTens(remainder);
                return phrase = `${hundred} hundred ${tens}`
            }
            else {
                searchTens(remainder);
                return phrase = `${hundred} hundred ${tens} ${ones}`
            }
        }
    }
    }
    if (number < 10) {
        searchOnes(number);
    }
    else if (number >=10 && number < 20) {
        searchTeens(number)
    }
    else if (number >=20 && number < 100) {
        searchTens(number);
    }
    else if (number >= 100) {
        searchHundred(number);
    }
    return phrase;
}
