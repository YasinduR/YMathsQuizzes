document.getElementById("current_marks").innerHTML = "Status : "

//generate (cx+a)(dx+b) type formular Where user will see it as Ax^2 + Bx + C = 0 

var a = 0;
var b = 0;
var c = 1;
var d = 1;


var coefficients =[]; // Correct answer
var is_correct = false;  //answer is correct or wrong
var marks = 0;
var total = 10;
var current_question = 0; // index of current question
var level = 1; // Dificult level passed from home page
var increment = 100/total; 
var solution = [] ; // Solution intial list
var question ="";
var Answers_correct = [];

level = sessionStorage.getItem('Level');
document.getElementById('Level').textContent = level
document.getElementById('A').textContent = Adjust_A(c*d)

// Get the input element
var inputElement = document.getElementById('userAnswer1');
var progressBar_1 = document.getElementById("progressBar-1");

// Function to increase the progress by  increment %
function increaseProgress(increment) {  
  // Get the current width of the progress bar
  var currentWidth = parseFloat(progressBar_1.style.width) || 0;
  
  // Increase the width by a certain amount (e.g., 10%)
  var newWidth = Math.min(currentWidth + increment, 100); // Ensure progress does not exceed 100%
  
  // Update the width of the progress bar
  progressBar_1.style.width = newWidth + "%";
}

function generateQuestion() { // Generate questions
    if (current_question>=total){
        quiz_end();
    }
    playSound("restart-1.mp3")
    
    // co-effients random variation based on difficulty level
    if (level ==1){
    //a = getRandomCoefficient(rangeWithoutZero(-5, 5));
    //b = getRandomCoefficient(rangeWithoutZero(-5, 5));
    a = -1
    b = 3
    c = 1;
    d = 1;
    }
    else if(level ==2){
    a = getRandomCoefficient(rangeWithoutZero(-12, 12));
    b = getRandomCoefficient(rangeWithoutZero(-12, 12));
    c = 1;
    d = 1;
    }    
    else if(level ==3){
    a = getRandomCoefficient(rangeWithoutZero(-5, 5));
    b = getRandomCoefficient(rangeWithoutZero(-5, 5));
    c = getRandomCoefficient(rangeWithoutZero(-3, 3));
    d = getRandomCoefficient(rangeWithoutZero(-3, 3));
    }
    else if(level ==3){
    a = getRandomCoefficient(rangeWithoutZero(-5, 5));
    b = getRandomCoefficient(rangeWithoutZero(-5, 5));
    c = getRandomCoefficient(rangeWithoutZero(-3, 3));
    d = getRandomCoefficient(rangeWithoutZero(-3, 3));
    }
    else if(level ==4){
    a = getRandomCoefficient(rangeWithoutZero(-5, 5));
    b = getRandomCoefficient(rangeWithoutZero(-5, 5));
    c = getRandomCoefficient(rangeWithoutZero(-3, 3));
    d = getRandomCoefficient(rangeWithoutZero(-3, 3));
    }
    else if(level ==5){
    a = getRandomCoefficient(rangeWithoutZero(-7, 7));
    b = getRandomCoefficient(rangeWithoutZero(-7, 7));
    c = getRandomCoefficient(rangeWithoutZero(-5, 5));
    d = getRandomCoefficient(rangeWithoutZero(-5, 5));
    }
    
    k1 = CommonFactors(c,a)
    k2 = CommonFactors(d,b)
    sign1 = Math.sign(c)
    sign2 = Math.sign(d)

    solution = [k1*k2*sign1*sign2,sign1*c/k1,sign1*a/k1,sign2*d/k2,sign2*b/k2]; // k,c,a,d,b modified

    coefficients = [c*d,a*d+b*c,a*b];

    Answers_correct =[-a,-b]

    current_question += 1;
    document.getElementById('current_question').textContent =  current_question +" ) ";
    
    question = multiplyByX(a*d+b*c) + writeconstant(a*b) // Bx+C PART of the Question
    // A
    document.getElementById('question').textContent = question ;
    document.getElementById('A').textContent = Adjust_A(c*d);
}

function Adjust_A(product_cd){   // Adjust A in Ax^2+Bx+C = 0 proper way
   if(product_cd==1){
    return " "
   }
   if(product_cd==-1){
    return "-"
   }
   else{
    return product_cd
   }

}




function getRandomCoefficient(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function checkAnswer() {
    
    increaseProgress(increment)
    const userAnswer1= Number(document.getElementById('userAnswer1').value);
    const userAnswer2 =Number(document.getElementById('userAnswer2').value);

    const Anwsers = [userAnswer1,userAnswer2]

    k = solution[0]
    c = solution[1]
    a = solution[2]
    d = solution[3]
    b = solution[4]
   

    var explanation0 = document.getElementById('A').textContent+"x^2"+question +"= 0"+"\n"   // Question
    var explanation1 = k == 1 ? "" : Adjust_A(k)+'('+Adjust_A(c*d)+"x^2" + multiplyByX(a*d+b*c)+ writeconstant(a*b)+')'+"= 0"+"\n"  ;
    // If k==1 there is no step 1
    var explaination2  = Adjust_A(k)+ (k == 1 ? "" :"(") +Adjust_A(c*d)+"x^2" + multiplyByX(a*d)+multiplyByX(b*c)+ writeconstant(a*b)+(k == 1 ? "" :")")+"= 0"+"\n"
    var explaination3  = Adjust_A(k)+(k == 1 ? "" :"(")+Adjust_A(d)+"x"+"(" +Adjust_A(c)+"x"+ writeconstant(a)+')'+writeconstant(b)+"(" +Adjust_A(c)+"x"+ writeconstant(a)+')'+(k == 1 ? "" :")")+"= 0"+"\n"
    var explaination4 =  Adjust_A(k)+"(" +Adjust_A(d)+"x"+ writeconstant(b)+')'+"(" +Adjust_A(c)+"x"+ writeconstant(a)+')'+"= 0"+"\n"
    var explaination5 =  Adjust_A(d)+"x"+ writeconstant(b)+ "= 0  or " + Adjust_A(c)+"x"+ writeconstant(a)+ "= 0"+"\n"
    var explaination6 =  "x = "+ answer(-b,d)+ " or " +" x = "+ answer(-a,c)

    var explaination = explanation0 + explanation1 + explaination2  + explaination3  +explaination4 +explaination5+explaination6

    // Sort both lists
    Anwsers.sort();
    Answers_correct.sort();

    is_correct = true
    for (let i = 0; i < Anwsers.length; i++) {
        if (Anwsers[i] !== Answers_correct[i]) {
            is_correct = false
            break;
        }
    }


    if (is_correct) {
        
        //document.getElementById('result').textContent = 'Correct!';
        //document.getElementById('marks').textContent += 1
        openPopup("Correct! Well done." +"\n\n"+ explaination);
        marks += 1
        //playSound('correct-1.mp3');
    } else {
        openPopup2("Incorrect. Please study the explanation:"+"\n\n"+ explaination);
        //playSound('incorrect-1.mp3');
        //document.getElementById('result').textContent = 'Wrong. Try again.';
    }
    //generateQuestion()
    //alert("This is a popup message box!")
    document.getElementById("current_marks").textContent = "Status : "+ marks + " / " + current_question

}


function openPopup(message) {
    var modal = document.getElementById("popupModal");
    var popupMessage = document.getElementById("popupMessage");
    popupMessage.innerText = message;
    modal.style.display = "block";

}
function closePopup() {
    var modal = document.getElementById("popupModal");
    modal.style.display = "none";
    generateQuestion()
}

function openPopup2(message) {
    var modal = document.getElementById("popupModal2");
    var popupMessage = document.getElementById("popupMessage2");
    popupMessage.innerText = message;
    modal.style.display = "block";

}
function closePopup2() {
    var modal = document.getElementById("popupModal2");
    modal.style.display = "none";
    generateQuestion()
}

function answer(x,y){
    if(y==1){
        return x;
    }
    else if(y==-1){
        return -x;
    }
    else if(y>1){
        return x +"/"+y;
    }
    else if(y<-1){
        return -x +"/"+y;
    }

}





function playSound(soundFile) {
    var audio = new Audio('sounds/' + soundFile);
   audio.play();
}

function multiplyByX(value) {
    if (value == 1) {
        return ' + x';
    } else if (value == -1) {
        return ' - x';
    } else if (value > 0) {
        return ' + ' + value + 'x';
    } else if (value < 0) {
        return ' - '+ Math.abs(value) + 'x';
    } else {
        return ''; // Output nothing for zero
    }
}

function writeconstant(value) {
    if (value >= 0) {
        return ' + ' + value ;
    } else (value < 0) 
    {
        return ' - '+ Math.abs(value) ;
    } ;
}
function restart() {
    playSound("restart-1.mp3")
    location.reload();
}

function quiz_end(){  
    sessionStorage.setItem('Quiz', 'Quadratic Equation Quiz - Level '+level);
    sessionStorage.setItem('Score', marks);
    sessionStorage.setItem('Total_questions', total);
    window.location.href = 'Quiz_completed.html'
}

function auto_answer(){
    inputElement.value = '(x'+writeconstant(a)+')'+'(x'+writeconstant(b)+')'.replace(/\s/g, "").toLowerCase();

}


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

function HasCommonFactors(num1, num2) { // check whether there is a common factor
    
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



generateQuestion()