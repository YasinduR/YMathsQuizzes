function passlevel_q1(level) {
    sessionStorage.setItem('Level', level);
    window.location.href = 'Factorizing_quiz.html'
}
function passlevel_q2(level) {
    sessionStorage.setItem('Level', level);
    window.location.href = 'Quadric_Equation_Quiz.html'
}


function Contact(){
    document.getElementById("topic").innerHTML = "Contact us"
    document.getElementById("p1").innerHTML =" We’re thrilled that you’re using our Maths Quiz platform! Whether you have a question, suggestion, or need support, we’re here to help. Please use one of the methods below to get in touch with us."
    document.getElementById("p2").innerHTML = "Phone : <a href='tel:+94712345678'>+94712345678</a>";
    document.getElementById("p3").innerHTML = "Email : <a href='mailto:info@mathsquiz.com'>Ymathsquiz@gmail.com</a>";
    changeStyle('0px');
}

function About_us(){
    document.getElementById("topic").innerHTML = "About us"
    document.getElementById("p1").innerHTML = "Welcome to YMaths Quiz, your destination for enhancing your mathematical skills. Our platform is designed with a single purpose in mind: to elevate the maths skills of students everywhere.";
    document.getElementById("p2").innerHTML = "Our interactive quizzes and comprehensive resources are crafted to make learning maths engaging and effective.";
    document.getElementById("p3").innerHTML = "Join us on this journey to mastering mathematics. Let's make learning fun and rewarding together!";
    changeStyle('0px');
}

function Home() {
    window.location.reload();
}

function changeStyle(Padding) {
    var divs = document.getElementsByClassName('Description');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.paddingTop = Padding;
        divs[i].style.paddingBottom = Padding;
    }
}

function Page_underdevelop() {
    //sessionStorage.setItem('Level', level);
    window.location.href = 'Page-Underdevelop.html'
}
