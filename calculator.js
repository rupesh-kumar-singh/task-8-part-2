// for html pat only 
// main div 
let divcreate = document.createElement("div");
divcreate.className = "container";
divcreate.id = " div-container";
// divcreate.textContent = 'hi i am rupesh';
document.body.appendChild(divcreate);

// cretion of title by h1tag
let h1 = document.createElement("h1");
      h1.id ="title";
      h1.textContent = "this is my calculator";
      divcreate.appendChild(h1)

      // explation about my task
      let paragraph = document.createElement("p");
      paragraph.id = "description";
      paragraph.textContent = "the calculator can calculate sum, minus, multiply, divide and modulus. "
        divcreate.appendChild(paragraph);
// about input tag  row =1

let div_1 = document.createElement("div");
div_1.className = "row row-1";
div_1.id = "row-one";
divcreate.append(div_1);

let input = document.createElement("input");
input.id = "result";
input.setAttribute("type","text");
input.setAttribute("class","input");
div_1.append(input);

// about notation




let notations = document.createElement("div");
notations.className = "row notation";
notations.id = "notation-1";
divcreate.appendChild(notations)

let btn_1 =document.createElement("button");
btn_1.textContent = "ac";
btn_1.id = "clear";

let btn_2 =document.createElement("button");
btn_2.textContent = "del";

let btn_3 =document.createElement("button");
btn_3.textContent = "%";

let btn_4 =document.createElement("button");
btn_4.textContent = "*";

notations.append(btn_1,btn_2,btn_3,btn_4);




// row =2

let div_2 = document.createElement("div");
div_2.className = "row row-2";
div_2.id = "row-two";
divcreate.appendChild(div_2)

let button_1 =document.createElement("button");
button_1.id = "7";
button_1.textContent = "7";

let button_2 =document.createElement("button");
button_2.id = "8";
button_2.textContent = "8";

let button_3 =document.createElement("button");
button_3.id= "9";
button_3.textContent = "9";

let button_4 =document.createElement("button");
button_4.textContent = "/";

div_2.append(button_1,button_2,button_3,button_4);

// row 3

let div_3 = document.createElement("div");
div_3.className = "row row-3";
div_3.id = "row-three";
divcreate.appendChild(div_3)

let button_5 =document.createElement("button");
button_5.id = "4";
button_5.textContent = "4";

let button_6 =document.createElement("button");
button_6.id = "5";
button_6.textContent = "5";

let button_7 =document.createElement("button");
button_7.id = "6";
button_7.textContent = "6";

let button_8 =document.createElement("button");
button_8.id = "subtract";
button_8.textContent = "-";

div_3.append(button_5,button_6,button_7,button_8);

// row 4

let div_4 = document.createElement("div");
div_4.className = "row row-4";
div_4.id = "row-four";
divcreate.appendChild(div_4)

let button_9 =document.createElement("button");
button_9.id = "1";
button_9.textContent = "1";

let button_10 =document.createElement("button");
button_10.id = "2"
button_10.textContent = "2";

let button_11 =document.createElement("button");
button_11.id = "3";
button_11.textContent = "3";

let button_12 =document.createElement("button");
button_12.id = "add";

button_12.textContent = "+";

div_4.append(button_9,button_10,button_11,button_12);


// row -5

let div_5 = document.createElement("div");
div_5.className = "row row-5";
div_5.id = "row-five";
divcreate.appendChild(div_5)

let button_13 =document.createElement("button");
button_13.textContent = "0";

let button_14 =document.createElement("button");
button_14.textContent = "00";

let button_15 =document.createElement("button");
button_15.textContent = ".";

let button_16 =document.createElement("button");
button_16.id = "equal";
button_16.textContent = "=";

div_5.append(button_13,button_14,button_15,button_16);



// ------------------------------------------------------------------------

// main logic stsart from here
let str =  "";

let btn = document.querySelectorAll(".row button");

Array.from(btn).forEach((event)=>{

    event.addEventListener("click",(e)=>{

        if(e.target.innerHTML== '='){
          str = eval(str);
          document.querySelector(".input").value=str;;

        }else if(e.target.innerHTML == 'ac'){
            str = "";
            document.querySelector(".input").value= str;
        }
        
        else{

            
            str = str + e.target.innerHTML;
            document.querySelector(".input").value=str;

        }
       

    })
})

