
//var quiz ="";

var score = sessionStorage.getItem('Score');
var total = sessionStorage.getItem('Total_questions');
var quiz = sessionStorage.getItem('Quiz');
//override_scores(8,10)

window.onload = function() {
    if (score === null) {
        window.location.href = "Problem-encountered.html";
    } 
}



sessionStorage.removeItem('Score');
sessionStorage.removeItem('Total_questions');
sessionStorage.removeItem('Quiz');

document.getElementById('Quiz').textContent = quiz;


document.getElementById('score text').textContent = score;


// Calculate percentage score
const percentage = (score / total) * 100;

// Function to generate stars based on percentage score
function generateStars(percentage) {
 
    let stars = '';

    if (percentage >= 100) {
        stars = '★★★';
    } else if (percentage >= 75) {
        stars = '★★☆';
    } else if (percentage >= 50) {
        stars = '★☆☆';
    }else if(percentage < 50){
        stars = '☆☆☆'
    }
    return stars;
}


// Display stars representing the user's performance
const stars = generateStars(percentage);
const starsElement = document.createElement('div');
starsElement.textContent = stars;
starsElement.classList.add('star'); // Add star class
document.getElementById('stars').appendChild(starsElement);

// Display the score and total
document.getElementById('score text').textContent = 'Score: ' + score + ' of ' + total;


function override_scores(sc,tot){ // only to testing purporses
    score = sc
    total = tot
}