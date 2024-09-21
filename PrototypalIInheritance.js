// Prototypal Inheritance
/*

hum object create karte hai and kisi ek parent constructor function ke prototype mein kuch add kr 
dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instence ko wo properties 
jo parent ko prototyoe mein di gayi thi wo milti hai saugaat mai

*/

/*

ek function jo ki this ka upyog kar raha ho and new ke dwaara naye naye objects bana kar 
deta ho aise function ko constructor function kahete hai 

*/

/*

aisa koi bhi function jisme aap this ka upyog kar rhe ho aur us function
ko call karte waqt aap new ka upyog karein, to new ka matlab waha par ek 
blank object hojata hai

*/

function makeHuman(name,age){
    this.name = name;
    this.age = age;
}

makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}
const human1 =new makeHuman("harsh",35);
const human2 = new makeHuman("harshita",34);
