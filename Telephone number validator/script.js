let userInput=document.getElementById("user-input");
let checkbtn=document.getElementById("check-btn");
let clearbtn=document.getElementById("clear-btn");
let result=document.getElementById("results-div");
const regex1=/^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const regex2=/^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
const regex3=/^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
const regex4=/^1 [0-9]{3} [0-9]{3} [0-9]{4}$/;
const regex5=/^[0-9]{10}$/;
const regex6=/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const regex7=/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;

checkbtn.addEventListener("click",()=>{
const r=userInput.value;
if (r==""){alert("Please provide a phone number");}
else{
if (regex1.test(r)||regex2.test(r)||regex3.test(r)||regex4.test(r)||regex5.test(r)||regex6.test(r)||regex7.test(r)){
  result.innerText="Valid US number: "+r;
}
else{result.innerText="Invalid US number: "+r;}
}});
clearbtn.addEventListener(
  "click",()=>{
    userInput.value="";
    result.innerText="";
  }
)
