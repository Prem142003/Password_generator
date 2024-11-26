const password_display = document.querySelector("[data-password-display]");
const copy_btn = document.querySelector("[data-copy]");

const length_display = document.querySelector("[data-lengthnumber]");

const inputslider = document.querySelector("[data-length-slider]");

const uppercasecheck = document.querySelector("#uppercase");
const lowercasecheck = document.querySelector("#lowercase");
const numbercheck = document.querySelector("#number");
const symbolcheck = document.querySelector("#symbol");

const allcheck = document.querySelector("input[type=checkbox]");
const generate_button = document.querySelector(".generate-password-button");
const symbol = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';

let password = "";

let passwordlength = 10;
let checkcount = 0;

handleslider();

function handleslider(){
    inputslider.value = passwordlength;
    length_display.innerHTML = passwordlength;
}
console.log("handleslider done");
function get_random_intiger(min , max){
    return  Math.floor(Math.random()*(max-min)) + min;
}
console.log("generation of random intiger done");

// now writing function for generation random number 
function generate_random_number(){
    return get_random_intiger(0,9);
}

function generate_lower_case(){
      return String.fromCharCode(get_random_intiger(97,123));
}

function generate_upper_case(){
      return String.fromCharCode(get_random_intiger(65,91));
}

function generate_symbol(){
    const randnum = get_random_intiger(0 ,  symbol.length);
     return symbol.charAt(randnum);
}



generate_button.addEventListener('click' , ()=>{
    password_display.value =  password;
 })
 

console.log("gneneration of upper lower number and symbol done ");

let funcarr = [];

if(uppercasecheck.checked){
    funcarr.push(generate_random_number)
}

if(lowercasecheck.checked){
    funcarr.push(generate_lower_case)
}

if(numbercheck.checked){
    funcarr.push(generate_upper_case)
}
if(symbolcheck.checked){
    funcarr.push(generate_symbol)
}
console.log("push checked value in array done")

for(let i = 0 ; i<funcarr.length ; i++){
    password +=funcarr[i];
}

console.log("copying array into password done")








