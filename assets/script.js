/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

// Ho 4 casi:
// -numero multiplo solo di 3 (resto 3=0, resto 5>0) Fizz
// .num multiplo solo di 5  Buzz
// -num multipl di entrambi “FizzBuzz”
// multiplo di nessuno (stampo il numero)
const container = document.querySelector('.dc-container');

for(i=1; i<=100; i++){

  const box = document.createElement('div');
  box.className='box';
  

  if( !(i % 3) && !(i % 5)){
    console.log(i , 'multiplo di entrambi --- FizzBuzz');
    box.innerHTML='FizzBuzz';
    box.classList.add('brown');
  } else if(!(i % 3) && (i % 5)){
    console.log(i , 'multiplo di 3 --- Fizz');
    box.innerHTML='Fizz';
    box.classList.add('yellow');
  }else if((i % 3) && !(i % 5)){
    console.log(i , 'multiplo di 5 --- Buzz');
    box.innerHTML='Buzz';
    box.classList.add('tomato');
  }else{
    console.log(i);
    box.innerHTML=i;
    box.classList.add('aqua');
  }

  container.append(box);
}

