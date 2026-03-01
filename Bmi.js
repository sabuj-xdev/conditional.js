var weight , height , BMI , mul ;
weight= 75;
height=1.75 ; 
mul= height*height;
BMI= weight/mul;
if (BMI<18){
    console .log (BMI)
    console.log ("You are a Under Weight ")
}
else if (BMI >= 18.5 && BMI <=24.9) {
    console.log (BMI)
console.log ("you are a normal man ")
}
else if (BMI >=25 && BMI <= 29.9)
{
    console.log (BMI)
    console.log ("you are a Overweight")
}
else 
{
    console.log (BMI)
    console.log ("You are Obese")
}; 