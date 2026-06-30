//====================================================
// WAIT FOR PAGE TO LOAD
//====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Academic Website Loaded");

    initialiseReveal();

    initialiseCounters();

    initialiseScrollButton();

    initialiseCardEffects();

    initialisePhotoEffects();

});



//====================================================
// SCROLL REVEAL ANIMATION
//====================================================

function initialiseReveal() {

    const elements = document.querySelectorAll(

        ".card, .highlight, .about p"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =

                        "translateY(0px)";

                }

            });

        },

        {

            threshold:0.15

        }

    );

    elements.forEach(el=>{

        el.style.opacity="0";

        el.style.transform="translateY(40px)";

        el.style.transition="all .8s ease";

        observer.observe(el);

    });

}



//====================================================
// ANIMATED RESEARCH COUNTERS
//====================================================

function initialiseCounters(){

    const counters = document.querySelectorAll(

        ".highlight h3"

    );

    counters.forEach(counter=>{

        const text = counter.innerText;

        const number = parseInt(text);

        if(isNaN(number)) return;

        let value = 0;

        const speed = number / 80;

        const update = ()=>{

            value += speed;

            if(value < number){

                counter.innerText =

                    Math.floor(value);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText = text;

            }

        };

        update();

    });

}



//====================================================
// CARD HOVER EFFECTS
//====================================================

function initialiseCardEffects(){

    const cards = document.querySelectorAll(

        ".card"

    );

    cards.forEach(card=>{

        card.addEventListener(

            "mouseenter",

            ()=>{

                card.style.boxShadow =

                "0px 20px 45px rgba(13,59,115,.35)";

            }

        );

        card.addEventListener(

            "mouseleave",

            ()=>{

                card.style.boxShadow =

                "";

            }

        );

    });

}



//====================================================
// PROFILE PHOTO EFFECT
//====================================================

function initialisePhotoEffects(){

    const img =

    document.querySelector(".profile-photo img");

    if(!img) return;

    img.addEventListener("mousemove",(e)=>{

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =

            ((x / rect.width)-0.5)*12;

        const rotateX =

            ((y / rect.height)-0.5)*-12;

        img.style.transform =

        `perspective(900px)

         rotateX(${rotateX}deg)

         rotateY(${rotateY}deg)

         scale(1.04)`;

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="";

    });

}



//====================================================
// SCROLL TO TOP BUTTON
//====================================================

function initialiseScrollButton(){

    const button = document.createElement("button");

    button.innerHTML="▲";

    button.id="scrollTopButton";

    document.body.appendChild(button);

    button.style.position="fixed";

    button.style.right="25px";

    button.style.bottom="25px";

    button.style.width="55px";

    button.style.height="55px";

    button.style.borderRadius="50%";

    button.style.border="none";

    button.style.cursor="pointer";

    button.style.fontSize="22px";

    button.style.background="#0d3b73";

    button.style.color="white";

    button.style.boxShadow=

    "0px 5px 15px rgba(0,0,0,.3)";

    button.style.display="none";

    button.style.transition=".3s";

    button.addEventListener(

        "mouseenter",

        ()=>{

            button.style.background="#1557a5";

            button.style.transform="scale(1.08)";

        }

    );

    button.addEventListener(

        "mouseleave",

        ()=>{

            button.style.background="#0d3b73";

            button.style.transform="scale(1)";

        }

    );

    window.addEventListener(

        "scroll",

        ()=>{

            if(window.scrollY>300){

                button.style.display="block";

            }

            else{

                button.style.display="none";

            }

        }

    );

    button.addEventListener(

        "click",

        ()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    );

}



//====================================================
// STICKY HEADER SHADOW
//====================================================

window.addEventListener(

    "scroll",

    ()=>{

        const header =

        document.querySelector("header");

        if(!header) return;

        if(window.scrollY>40){

            header.style.boxShadow=

            "0px 8px 25px rgba(0,0,0,.35)";

        }

        else{

            header.style.boxShadow="none";

        }

    }

);



//====================================================
// SMOOTH PAGE FADE-IN
//====================================================

window.onload=function(){

    document.body.style.opacity="0";

    document.body.style.transition="opacity .8s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

};