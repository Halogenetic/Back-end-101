// This algorythm will output the sum of two chosen number (14)

nbra = 5;
nbrb = 9;

console.log('The sum of',nbra,'and',nbrb,'is',nbra + nbrb,)

//  This algorythm will output the division of two chosen number (5)

nbra = 10;
nbrb = 2;

console.log('The division of',nbra,'and',nbrb,'is',nbra / nbrb,)


//  This algorythm will output the modulo of two inputed numbers (1)

nbra = 10;
nbrb = 3;

console.log('The modulo of',nbra,'and',nbrb,'is',nbra % nbrb,)

//  This algorythm will output the concatenation of two phrases together(Hello world!)

stringa = 'Hello ';
stringb = 'world!';

console.log('the concatenation of',stringa,'and',stringb,'is',stringa + stringb,)

//  This algorythm will output the price with VAT with a rate of 21% from a price without VAT (30.25)

price = 25
pricevat = price + (price/100)*21

console.log('the price of',pricevat,'with VAT is',pricevat,)

//  This algorythm will output the surface of a circle from the radius of it (153.93804002589985)

radius = 7;
surface = Math.PI * Math.pow(radius, 2);

console.log('the surface of a circle with a',radius,'is',surface,)


//  This algorythm will output the number of seconds since midnight from the time of day in three different numbers, the hour, the minutes and the seconds (3661)

ct = new Date()
hour = ct.getHours();
minutes = ct.getMinutes();
seconds = ct.getSeconds();


console.log("The number of seconds since midnight when it's ",hour,':',minutes,':',seconds,'is',(hour * 3600)+(minutes * 60)+(seconds),)


// This algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay

age = 17

if (age>=18) {
    console.log ('The price is 10')
} else {
    console.log ('The price is 8')
}

// This algorithm which given 3 numbers finds the maximum

a = 5
b = 2
c = 3

if (a>b, a>c) {
    x = a 
} else if (b>c) {
    x = b
} else {
    x = c
}

console.log('The maximum number is',x,)

// This algorithm throws 3 dices and finds out the number of identical value, three, two or none.

d1 = Math.floor(Math.random() * 5 + 1);
d2 = Math.floor(Math.random() * 5 + 1);
d3 = Math.floor(Math.random() * 5 + 1);

if (d1==d2, d2==d3) {
    x = 'three'
} else if (d1==d2) {
    x = 'two'
} else if (d2==d3) {
    x = 'two'
} else if (d1==d3) {
    x = 'two'
} else {
    x = 'none'
}

console.log('The number of identical value is',x,)

// This algorithm given the number of a day returns its name

today = new Date('October 11, 2022 23:15:30');
x = today.getDay();

if (x==1) {
      console.log ('Lundi')
}
else if (x==2) {
      console.log ('Mardi')
}
else if (x==3) {
      console.log ('Mercredi')
}
else if (x==4) {
      console.log ('Jeudi')
}
else if (x==5) {
      console.log ('Vendredi')
}
else if (x==6) {
      console.log ('Samedi')
}
else if (x==0) {
      console.log ('Dimanche')
}

// This algorithm given a number of copies calculates the price 

x = 58

if (x<=10) {
    console.log('The price is',(x*0.12),)
} else if (x<=20) {
    console.log('The price is',(10*0.12)+((x-10)*0.11),)
} else if (x>20) {
    console.log('The price is',(10*0.12)+(10*0.11)+((x-20)*0.10),)
}

// Those algorithms receives an integers n and prints :
// the numbers from 1 to n

n = 10

for (i = 1; i <= n; i++) {
    console.log (i)
  }

// the numbers from 1 to n in descending order

for (i = 1; i <= n; i++) {
    console.log (n-i+1)
  }

// the numbers from -n to n

for (i = -n; i <= n; i++) {
    console.log (i)
  }

// the odd numbers from 1 to n

for (i = 1; i <= n; i++) {
    if (i%2 == 1)
    console.log (i)
  }

// This algorithm receives an random integer and prints from 0 to it.

n = Math.floor(Math.random() * 10);


for (i = 0; i <= n; i++) {
    console.log (i)
  }

// This algorithm throws a dice a given number of time and count the number of time a certain number is received.

t = 100
n = 1
y = 0

for (x=1; x<=t; x++){
if (Math.floor(Math.random() * 5+1) == n) {
    y++
}
}
console.log('The dice been throwed',t,'times and number',n,'been received',y,'times')

// the even numbers from 0 to n

n = 10

for (i = 1; i <= n; i++) {
    if (i%2 == 0)
    console.log (i)
  }

// This algorithm verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

nbr = 7
y = 0

for (x = 1; x< nbr; x++) {
    if (nbr % x == 0) {
        y = y+x
    }
}
if (y==nbr) {
    console.log('Number',nbr,'is a perfect number') }
else   { console.log('Number',nbr,'is not a perfect number')

}

// This algorithm prints everything in an array.


test = ["Hello", "world", "!"]
for (x=0; x<= test.length-1; x++) {
console.log(test[x])
}

// This algorithm receives an array of integers and prints its maximum.

max = 0
integers = [1,15,3,4,11,6,7,18,9]
for (x=0; x<= integers.length-1; x++) {
    if (integers[x] > max){
        max = integers[x]
    }}
console.log('The maximum number in this array is',max,)

// This algorithm receives an array of integers and prints its minimum.

min = Infinity
integers = [1,15,3,4,11,6,7,18,9]
for (x=0; x<= integers.length-1; x++) {
    if (integers[x] < min){
        min = integers[x]
    }}
    console.log('The minimum number in this array is',min,)


// This algorithm receives an array of integers and prints the position of its minimum.

min = Infinity
integers = [10,15,3,4,1,6,7,18,2]
for (x=0; x<= integers.length-1; x++) {
    if (integers[x] < min){
        min = integers[x]
    }}
for (x=0; x<= integers.length-1; x++) {
    if (integers[x] == min){
        console.log('The position of the minimum integer is [',x,']')
    }}

// This algorithm receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.


asc = [1,2,3,4,5,6,7,8,9]
nonasc = [10,15,3,4,1,6,7,18,2]

integers = asc

y=0

for (x=0; x<= integers.length-2; x++) {
    if (integers[x] < integers[x+1] ){
        y++
    }
    else {
        y--
    }
}
if (y==integers.length-1){
    console.log (true)
} else {
    console.log (false)
}


