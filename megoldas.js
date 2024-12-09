// 1. feladat
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2)
      ? s.charAt(Math.floor(middle))
      : s.slice(middle -1, middle+1)
}

// 2. feladat
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
}

// 3. feladat
function stringClean(s){
    return s.replace(/\d/g, "");
}

// 4. feladat
function bmi(weight, height) {
    var result = weight/Math.pow(height,2)
    
    if (result <= 18.5){
      return "Underweight";
    }
    else if (result <= 25){
      return "Normal";
    }
    else if (result <= 30){
      return "Overweight";
    }
    else{
      return "Obese";
    }
}
