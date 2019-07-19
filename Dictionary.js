let input = 'programmerit';

const dictionary = (param) => {
    let arr = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    let output = ''
    let finalOutput = ''
    let str = param
    
    for (i = 0; i < arr.length; i++) {
        let deleteComma = output.replace(/,/g, '');

        if(str.includes(arr[i])) {
            output += `${arr[i]},`
        }
    }

    return output
}


console.log(dictionary(input))

