import './style.css';
import localQuotes from '../quotes.json';

function allQuotes(){
  document.getElementById("resultDiv")!.textContent = "";
  let local = Array.from(localQuotes.quotes);
  local.sort(function (a,b){
    if (a.author < b.author){
      return -1;
    }
    if (a.author > b.author){
      return 1;
    }
    return 0;
  });
  local.forEach((quote) => {
    let line = document.createElement("li");
    line.innerText = quote.quote + " - " + quote.author;
    document.getElementById("resultDiv")!.appendChild(line);
  });
}

function theQuotes(){
  document.getElementById("resultDiv")!.textContent = "";
  let local = Array.from(localQuotes.quotes);
  let replaced = local.map((tempQuote) => {
    let line = tempQuote.quote;
    return line.replace("the","<b>the</b>").replace("The","<b>The</b>");
  });
  replaced.forEach((quote) => {
    let line = document.createElement("li");
    line.innerHTML = quote;
    document.getElementById("resultDiv")!.appendChild(line);
  });
}

function lengthQuotes(){
  let local = Array.from(localQuotes.quotes);
  let lengthOfQuotes: number[] = [];
  local.forEach((quote) => {
    lengthOfQuotes.push(quote.quote.length);
  });
  document.getElementById("resultDiv")!.innerText = lengthOfQuotes.join(",");
}

function numberOfQuotes(){
  let local = Array.from(localQuotes.quotes);
  let lookupAuthor = (document.getElementById("authorSearch") as HTMLInputElement)!.value;
  let counter = 0;
  local.forEach((search) =>{
    if (search.author == lookupAuthor){
      counter++;
    }
  })
  document.getElementById("numberOfQuotes")!.setAttribute ("value", counter.toString());
}

document.getElementById("allQuotes")!.addEventListener("click", allQuotes);
document.getElementById("theQuotes")!.addEventListener("click", theQuotes);
document.getElementById("lengthQuotes")!.addEventListener("click", lengthQuotes);
document.getElementById("authorSearch")!.addEventListener("change", numberOfQuotes);