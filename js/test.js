function specialized_parse_int(string){
    if(string==''){
        return 1
    }
    else if(string=='-'){
        return -1
    }
    else if(string[0]=='-'){

        return -parseInt(string.substring(1))
    }
    else
        return parseInt(string)
    }

function HasCommonFactors(num1, num2) { 
    
    num1 = Math.abs(num1)  // aboulute values 
    num2 = Math.abs(num2)

    let smaller = Math.min(num1, num2); // Determine the smaller number

    if (smaller == 1){ // No common factors
        return false
    }

    for (let i = 2; i <= smaller; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            return true // Found an common factor
        }
    }
    return false // Could nt catch a common factor
}

function CheckAnswer(expression) {

    // Remove all whitespace from the expression
    expression = expression.replace(/\s+/g, '');

    // Match the input pattern (ax+b)(cx+d) or (aX+b)(cX+d)
    const regex = /([-]?\d*)\(([-]?\d*)[xX]([+-]\d+)\)\(([-]?\d*)[xX]([+-]\d+)\)/;
    const match = expression.match(regex);

    if (!match) {
        return NaN
        //throw new Error('Invalid input format');
    }

    // k(cx+a)(dx+b)

    const k = specialized_parse_int(match[1]);
    const c = specialized_parse_int(match[2]);
    const a = specialized_parse_int(match[3]);
    const d = specialized_parse_int(match[4]);
    const b = specialized_parse_int(match[5]);

    if (HasCommonFactors(c,a)||HasCommonFactors(d,b)) {
        return NaN
        //throw new Error('Incomplete Factorizing');
    }

    // Compute the coefficients A, B, C
    const A = k * a * c;
    const B = k * (a * d + b * c);
    const C = k * b * d;
    // Format the result as Ax^2 + Bx + C
    const result =[A,B,C]
    return result;
    


    //return [[match[1],match[2],match[3],match[4],match[5]],
    //return [specialized_parse_int(match[1]),
   // specialized_parse_int(match[2]),
    //specialized_parse_int(match[3]),specialized_parse_int(match[4]),specialized_parse_int(match[5])]

    // Parse the coefficients

}

// Example usage:
const input1 = "5(3x - 1)(-2x + 5)";
const input2 = "2(3x - 1)(-2x + 4)";
const input3 = "-(-3X + 1)(-X + 5)";

console.log(CheckAnswer(input1));  // "8x^2 + 22x + 15"
console.log(CheckAnswer(input2));  // "8x^2 + 22x + 15"
console.log(CheckAnswer(input3));  // "8x^2 + 22x + 15"




// Example usage:
//console.log(HasCommonFactors(12, 23));
//console.log(HasCommonFactors(-12, -23));
//console.log(HasCommonFactors(-1, 5));
//console.log(HasCommonFactors(-23, 23));
//console.log(HasCommonFactors(5, 25));
//console.log(HasCommonFactors(7, 14));
//console.log(HasCommonFactors(26, -13));
//HasCommonFactors(12, 2);
//HasCommonFactors(1, 5); // Outputs: Common factors between 12 and 18:  [1, 2, 3, 6]


function checkAnswer() {
    
    increaseProgress(10)
    var userAnswer_raw = document.getElementById('userAnswer').value;
    var userAnswer = userAnswer_raw.replace(/\s/g, "").toLowerCase();
    //var a1 = document.getElementById('answer1').textContent;
    //var a2 = document.getElementById('answer2').textContent;
    var a1 = '( x '+writeconstant(a)+' )';
    var a2 = '( x '+writeconstant(b)+' )';
    var asw1 = a1.replace(/\s/g, "") +a2.replace(/\s/g, "")
    var asw2 = a2.replace(/\s/g, "") +a1.replace(/\s/g, "")
    //document.getElementById('answercomplete').textContent = a1+a2 +","+userAnswer
    var explaination1 = "x2" + question +"\n" 
    var explaination2 = "= x2" + multiplyByX(a) + multiplyByX(b) + writeconstant(a*b) +"\n"
    var explaination3 ="= x(x" + writeconstant(a) +")" + writeconstant(b) +"(x"+  writeconstant(a) +")" +"\n"
    var explaination4 ="= "+ a1 +" "+ a2
    var explaination = explaination1  + explaination2  + explaination3  +explaination4

    if ((userAnswer == asw1 || userAnswer == asw2)) {
        is_correct = true
        //document.getElementById('result').textContent = 'Correct!';
        //document.getElementById('marks').textContent += 1
        openPopup("Correct! Well done." +"\n\n"+ explaination);
        marks += 1
        //playSound('correct-1.mp3');
    } else {
        is_correct = false
        openPopup2("Incorrect. Please study the explanation:"+"\n\n"+ explaination);
        //playSound('incorrect-1.mp3');
        //document.getElementById('result').textContent = 'Wrong. Try again.';
    }
    //generateQuestion()
    //alert("This is a popup message box!")
    document.getElementById("current_marks").textContent = "Status : "+ marks + " / " + current_question

}

function rangeWithoutZero(n, m) {  // Create list of number n to m 
    // Ensure n is less than m
    if (n > m) {
        [n, m] = [m, n];
    }
    // Create the array
    let result = [];
    for (let i = n; i <= m; i++) {
        if (i !== 0) {
            result.push(i);
        }
    }
    
    return result;
}

function getRandomElement(arr) {  // select random element from a given 
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
//L = rangeWithoutZero(-5, 4)

//console.log(getRandomElement(L))



function CommonFactors(num1, num2) { // FIND common factor  from  2 check whether there is a common factor
    
    num1 = Math.abs(num1)  // aboulute values 
    num2 = Math.abs(num2)

    let smaller = Math.min(num1, num2); // Determine the smaller number

    lcf = 1;     //larget common factor

    for (let i = 1; i <= smaller; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            lcf = i // Found an common factor
        }
    }

    return lcf
}
console.log(-4/2)