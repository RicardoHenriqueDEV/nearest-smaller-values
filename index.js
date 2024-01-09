const input = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
let result = [];
//expected output stored in result: [0, 0, 4, 0, 2, 2, 6, 0, 1, 1, 5, 1, 3, 3, 7]

//Fist Loop
for (var i = 0; i < input.length; i++) {
    
    //Second Loop
    for (var i2 = i; i2 >= 0; i2--) {

        if (input[i2] < input[i]) {
            result.push(input[i2]);
            break;
        }

    }

}

//Present it normal
console.log(result.join(" "));

//Present it backwards
console.log(result.reverse().join(" "));