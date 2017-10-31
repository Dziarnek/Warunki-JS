alert("Witaj, na tej stronie możesz obliczyć wynik działania (a*a)-(2*a*b)+(b*b)!");
console.log("Witaj, na tej stronie możesz obliczyć wynik działania (a*a)-(2*a*b)+(b*b)!");

var a = 1,
    b = 1,
    result = 1;

    a = prompt("Podaj wartość 'a'");
    while (isNaN(a)) {
        a = prompt(a + " to nie liczba, podaj watrość 'a'");
    }
b = prompt("Podaj wartość 'b'");
    while (isNaN(b)) {
        b = prompt(b + " to nie liczba, podaj watrość 'b'");
    }
result = (a-b)*(a-b);

alert("Wynik działania (a*a)-(2*a*b)+(b*b), gdzie 'a' = "+a+" i 'b' = "+b+" to "+result);
console.log("Wynik działania (a*a)-(2*a*b)+(b*b), gdzie 'a' = "+a+" i 'b' = "+b+" to "+result);

if (result > 0) {
    alert("Wynik jest dodatni");
    console.log("Wynik jest dodatni");
} else if (result < 0) {
    alert("Wynik jest ujemny");
    console.log("Wynik jest ujemny");
} else {
    alert("Wynik jest równy zero");
    console.log("Wynik jest równy zero");
}