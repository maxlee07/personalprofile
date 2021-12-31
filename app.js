const text=["Pacifist","C & C++ Developer","JS Developer","Python Developer","Web Developer","Engineer"];
let count=0;
let index=0;
let currenttext="";
let letter="";

(function type(){
    if(count === text.length){
        count=0;
    }
    currenttext = text[count];
    letter = currenttext.slice(0,++index);

    document.querySelector(".typing").textContent=letter;
    if(letter.length === currenttext.length){
        count++;
        index=0;
    }
    setTimeout(type,400);
})();