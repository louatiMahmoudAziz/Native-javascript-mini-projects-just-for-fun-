const number=document.getElementById("number");

const button=document.getElementById("convert-btn");

const output=document.getElementById("output");



function convFd(n) {
  if (n < 4) {
      return "I".repeat(n);
  } else if (n === 4) {
      return "IV";
  } else if (n === 5) {
      return "V";
  } else if (n > 5 && n < 9) {
      return "V" + "I".repeat(n - 5);
  } else if (n === 9) {
      return "IX";
  } else if (n === 0) {
      return "";
  }
  return ""; 
}


function convSd(n) {
  if (n < 4) {
      return "X".repeat(n);
  } else if (n === 4) {
      return "XL";
  } else if (n === 5) {
      return "L";
  } else if (n > 5 && n < 9) {
      return "L" + "X".repeat(n - 5);
  } else if (n === 9) {
      return "XC";
  } else if (n === 0) {
      return "";
  }
  return ""; 
}

function convTd(n) {
  if (n < 4) {
      return "C".repeat(n);
  } else if (n === 4) {
      return "CD";
  } else if (n === 5) {
      return "D";
  } else if (n > 5 && n < 9) {
      return "D" + "C".repeat(n - 5);
  } else if (n === 9) {
      return "CM";
  } else if (n === 0) {
      return "";
  }
  return ""; 
}


function convFod(n){
  if (n==0){return "";}
  else{return "M".repeat(n);}
}

function convertNumber(n){
  return (convFod(n/1000)+convTd(Math.floor((n%1000)/100))+convSd(Math.floor(((n%100)/10)))+convFd(n%10));
}



button.addEventListener("click", () => {
  const n = parseInt(number.value, 10); 
  console.log(number.value); 

  if (isNaN(n)) {
    output.innerText = "Please enter a valid number";
    output.style.backgroundColor="#b55c5c";
  } else if (n > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.style.backgroundColor="#b55c5c";
  } else if (n < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.style.backgroundColor="#b55c5c";
  } else {
    output.innerText = convertNumber(n);
    output.style.backgroundColor="#6cb98d";
  }
});