const btn = document.querySelector("#submitBtn");
const resultField = document.getElementById("resultField");
const numbertoRomanObj = [
     {number: 1000,roman: "M"},{number: 900,roman: "CM"},{number: 500,roman: "D"},
     {number: 400,roman: "CD"},{number: 100,roman: "C"},{number: 90,roman: "XC"},
     {number: 50,roman: "L"},{number: 40,roman: "XL"},{number: 10,roman: "X"},
     {number: 9,roman: 'IX'},{number: 5,roman: "V"},{number: 4,roman: "IV"},
     {number : 1,roman: "I"}
]


submitBtn.addEventListener('click', function(){
const inputField = document.getElementById("numberField").value;


if(inputField.length !== 0 && inputField <= 3999 && inputField > 0){
    resultField.value = convertNumber(inputField);


} else {
    alert("Please enter a valid number between 1 and 3999.")
}
})

function convertNumber(number){
    let finalRomanNumber = "";
    let numberInput = number;

    numbertoRomanObj.map(function(roman){
        if(Math.floor(numberInput/roman.number) >= 1){
            for(let i=Math.floor(numberInput/roman.number); i>0; i--){
                finalRomanNumber += roman.roman;
                numberInput = numberInput - roman.number;
            }
        }
    })
    
    return finalRomanNumber;
}


