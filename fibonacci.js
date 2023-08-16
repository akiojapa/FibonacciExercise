

const d1 = document.getElementById("result")

const d2 = document.getElementById("resultHFO")

d1.innerHTML = fibonacci(5)

function fibonacci(repeat){
  let n1 = 0, n2 = 1, next;
  
  next = n1 + n2;

  for (let i = 0; i < repeat; i++) {


    n1 = n2;
    n2 = next;
    next = n1 + n2;
    console.log("Fibonacci: " + next);
}
  return next
}

// ------------------------------------------- HOF ---------------------------------- //
const fibonacciHOF = (iterator) => {
    return (repeat) => {
    let n1 = 0, n2 = 1, next;

    next = n1 + n2;

    for (let i= 0; i < repeat; i++) {
        n1 = n2;
        n2 = next;
        next = n1 + n2;
        iterator(next);
    }
    return next;
    }
}

function printNextTerm(s) {
    console.log("Fibonacci HOF: " + s);
        
}

const fibonacciWithPrint = fibonacciHOF(printNextTerm);

// ------------------------------------------- HOF ---------------------------------- //

d2.innerHTML = fibonacciWithPrint(4)

