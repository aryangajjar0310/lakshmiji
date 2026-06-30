/* ==========================================
        LUCKY LAKSHMI V5
        JavaScript Part 1
========================================== */

const PASSWORD = "0310";

/* ===============================
   Elements
=============================== */

const loading = document.getElementById("loading");

const passwordScreen = document.getElementById("passwordScreen");

const welcomeScreen = document.getElementById("welcomeScreen");

const luckyNumberScreen = document.getElementById("luckyNumberScreen");

const favoriteScreen = document.getElementById("favoriteScreen");

const lakshmiScreen = document.getElementById("lakshmiScreen");

const proposalScreen = document.getElementById("proposalScreen");

const passwordInput = document.getElementById("password");

const wrongPassword = document.getElementById("wrongPassword");

const jersey = document.getElementById("jersey");

const musicButton = document.getElementById("musicButton");

const music = document.getElementById("backgroundMusic");

const heartContainer = document.getElementById("heart-container");

/* ===============================
   Loading
=============================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

loading.classList.add("hide");

},1800);

});

/* ===============================
   Show Screen
=============================== */

function showScreen(screen){

const screens=document.querySelectorAll(".screen");

screens.forEach(s=>{

s.classList.remove("active");

});

screen.classList.add("active");

}

/* ===============================
   Password
=============================== */

function checkPassword(){

if(passwordInput.value===PASSWORD){

wrongPassword.innerHTML="";

showScreen(welcomeScreen);

}

else{

wrongPassword.innerHTML="❌ Wrong Secret Code";

wrongPassword.style.color="#fff";

passwordInput.value="";

passwordInput.focus();

}

}

/* Enter Key */

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

/* ===============================
   Jersey Click
=============================== */

jersey.addEventListener("click",()=>{

showScreen(luckyNumberScreen);

});

/* ===============================
   Music
=============================== */

let playing=false;

musicButton.onclick=()=>{

if(!playing){

music.play();

playing=true;

musicButton.classList.add("playing");

}

else{

music.pause();

playing=false;

musicButton.classList.remove("playing");

}

};

/* ===============================
   Floating Hearts
=============================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const emojis=["❤️","💖","💕","💗"];

heart.innerHTML=

emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=

Math.random()*100+"vw";

heart.style.fontSize=

20+Math.random()*20+"px";

heart.style.animationDuration=

6+Math.random()*5+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,500);
/* ==========================================
        LUCKY NUMBER GAME
========================================== */

const numberButtons = document.querySelectorAll(".numberBtn");
const numberMessage = document.getElementById("numberMessage");

numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.number;

        // Reset
        numberButtons.forEach(btn => {
            btn.classList.remove("correct");
            btn.classList.remove("wrong");
        });

        if (value === "03") {

            button.classList.add("correct");

            numberMessage.innerHTML =
            "💖 03 is my lucky number...";

            setTimeout(() => {

                showScreen(lakshmiScreen);

                startLakshmiTyping();

            }, 1800);

        } else {

            button.classList.add("wrong");

            numberMessage.innerHTML =
            "🙈 Nice try... But that's not my lucky number.";

        }

    });

});


/* ==========================================
        LUCKY LAKSHMI TYPING
========================================== */

const typingMessage =
document.getElementById("typingMessage");

const continueBtn =
document.getElementById("continueBtn");

const lakshmiLines = [

"03 is my lucky number... 💙",

"But...",

"You are my Lucky Lakshmi. ❤️",

"You make every ordinary moment feel special.",

"And that's why this little page exists... 💖"

];

function startLakshmiTyping(){

typingMessage.innerHTML="";

continueBtn.style.display="none";

let line = 0;

function typeLine(){

if(line >= lakshmiLines.length){

continueBtn.style.display="inline-block";

continueBtn.style.animation="fadeUp .8s";

return;

}

const p=document.createElement("p");

typingMessage.appendChild(p);

let i=0;

const text=lakshmiLines[line];

const timer=setInterval(()=>{

p.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

line++;

setTimeout(typeLine,900);

}

},45);

}

typeLine();

}


/* ==========================================
        CONTINUE BUTTON
========================================== */

continueBtn.addEventListener("click",()=>{

showScreen(favoriteScreen);

});
/* ==========================================
        FAVOURITE QUESTION
========================================== */

const optionButtons = document.querySelectorAll(".optionBtn");
const favoriteMessage = document.getElementById("favoriteMessage");

optionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        if(answer === "you"){

            favoriteMessage.innerHTML =
            "💖 Congratulations! You found the hidden answer.";

            setTimeout(()=>{

                showScreen(proposalScreen);

            },1800);

        }

        else{

            favoriteMessage.innerHTML =
            "🙈 Nice guess... Look carefully, the answer is hidden.";

            button.classList.add("wrong");

            setTimeout(()=>{

                button.classList.remove("wrong");

            },500);

        }

    });

});


/* ==========================================
        PROPOSAL PAGE
========================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click",()=>{

heartExplosion();

startConfetti();

roseRain();

document.querySelector("#proposalScreen h2").innerHTML =
"❤️ YAYYYYY!! ❤️";

document.querySelector("#proposalScreen p").innerHTML =
"You just made me the happiest person alive. 💖";

yesBtn.style.display="none";
noBtn.style.display="none";

});


/* ==========================================
        NO BUTTON RUN AWAY
========================================== */

noBtn.addEventListener("mouseover",()=>{

const x =
Math.random() * (window.innerWidth-180);

const y =
Math.random() * (window.innerHeight-120);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});


/* ==========================================
        HEART EXPLOSION
========================================== */

function heartExplosion(){

for(let i=0;i<60;i++){

const heart=document.createElement("div");

heart.className="explodeHeart";

heart.innerHTML="❤️";

heart.style.left="50%";

heart.style.top="50%";

heart.style.setProperty(
"--x",
(Math.random()*900-450)+"px"
);

heart.style.setProperty(
"--y",
(Math.random()*700-350)+"px"
);

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1800);

}

}


/* ==========================================
        ROSE PETALS
========================================== */

function roseRain(){

for(let i=0;i<40;i++){

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=
4+Math.random()*4+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},8000);

}

}


/* ==========================================
        CONFETTI
========================================== */

function startConfetti(){

for(let i=0;i<100;i++){

const piece=document.createElement("div");

piece.className="confettiPiece";

piece.style.left=Math.random()*100+"vw";

piece.style.background=
`hsl(${Math.random()*360},100%,70%)`;

piece.style.animationDuration=
3+Math.random()*3+"s";

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},7000);

}

}


/* ==========================================
        MOBILE VIBRATION
========================================== */

if(navigator.vibrate){

yesBtn.addEventListener("click",()=>{

navigator.vibrate([150,80,150]);

});

}
/* ==========================================
        CLICK SOUND
========================================== */

const clickSound = new Audio("assets/click.mp3");

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

});

});


/* ==========================================
        MOUSE SPARKLES
========================================== */

document.addEventListener("mousemove",(e)=>{

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1200);

});


/* ==========================================
        EXTRA FLOATING HEARTS
========================================== */

function randomHeartRain(){

const heart=document.createElement("div");

heart.className="heart";

const list=["❤️","💕","💖","💗","💓"];

heart.innerHTML=list[Math.floor(Math.random()*list.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
5+Math.random()*4+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(randomHeartRain,900);


/* ==========================================
        MUSIC AUTOPLAY AFTER PASSWORD
========================================== */

const oldPasswordFunction = checkPassword;

checkPassword = function(){

oldPasswordFunction();

if(passwordInput.value===PASSWORD){

music.play().catch(()=>{});

musicButton.classList.add("playing");

playing=true;

}

};


/* ==========================================
        FINAL MESSAGE
========================================== */

function finalMessage(){

const box=document.createElement("div");

box.style.position="fixed";

box.style.inset="0";

box.style.display="flex";

box.style.justifyContent="center";

box.style.alignItems="center";

box.style.flexDirection="column";

box.style.background="rgba(255,105,180,.85)";

box.style.backdropFilter="blur(20px)";

box.style.zIndex="999999";

box.innerHTML=`

<h1 style="font-size:55px;color:white;">
❤️
</h1>

<h2 style="color:white;">
Thank You
</h2>

<p style="font-size:22px;color:white;padding:20px;max-width:700px;text-align:center;">

Maybe this is just a tiny website...

But every word here came straight from my heart.

💖

</p>

`;

document.body.appendChild(box);

}


/* ==========================================
        YES BUTTON
========================================== */

yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

finalMessage();

},4500);

});


/* ==========================================
        PAGE VISIBILITY
========================================== */

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

music.pause();

}

else{

if(playing){

music.play().catch(()=>{});

}

}

});


/* ==========================================
        PREVENT IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});


/* ==========================================
        DISABLE RIGHT CLICK
========================================== */

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});


/* ==========================================
        END
========================================== */

console.log("Lucky Lakshmi V5 Loaded ❤️");