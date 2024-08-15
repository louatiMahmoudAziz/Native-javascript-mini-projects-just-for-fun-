let text=document.querySelector("#text-input");

let btn=document.querySelector("#check-btn");
let result=document.querySelector("#result");

btn.addEventListener("click",handleclick);

function handleclick(){
const s=text.value;
if (s==""){alert("Please input a value");}
else {
  result.innerText=""
  result.innerText+=s+isPalindrome(s);
}

}

function isPalindrome(s){
  const regex = /^[a-zA-Z0-9]$/;
  let s1="";
  let s2="";
  for (let i=0;i<s.length;i++){
    if (regex.test(s[i])){
      s1+=s[i].toLowerCase();
    }
  }
  for (let i=0;i<s1.length;i++){
    s2+=s1[s1.length-1-i];
  }
  console.log(s1+'\n');
  console.log(s2);
  if (s1==s2){
    return " is a palindrome";
  }else{
    return " is not a palindrome";
  }

}