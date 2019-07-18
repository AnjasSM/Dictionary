let input = 'programit';

const dictionary = (param) => {
    let arr = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    let output = ''
    let str = param
    
    for (i = 0; i < param.length; i++) {
        let deleteComma = output.replace(/,/g, '');

        if(str.includes(arr[i])) {
            if(deleteComma == arr[i]) {
                output += ''
            } else {
                output += `${arr[i]},`
            }
        }
    }

    return output
}


console.log(dictionary(input))