const prompt = require('prompt-sync')();
nbr = prompt("Enter a number")
y=0

for (x = 1; x< nbr; x++) {
    if (nbr % x == 0) {
        y = y+x
    }
}
if (y==nbr) {
    console.log('Number',nbr,'is a perfect number') }
else   { console.log('Number',nbr,'is not a perfect number')

}
