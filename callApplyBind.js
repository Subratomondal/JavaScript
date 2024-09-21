// call apply bind
// ye teen tareeke hai function ko call karne ke abject ko this maan kar

//call
const obj1={
    name: "Rahul"
}
function abcd(){
    console.log(this);
}

abcd.call(obj1);

//apply
const obj={
    name: "Rahul"
}
function abcd(a,b,c){
    console.log(this,a,b,c);
}

abcd.apply(obj,[1,2,3]);

//bind - it is like a call but it doesn't give the value instently it will give a function that we can use it later whenever it required

const obj3={
    name: "Rahul"
}
function abcd(a,b,c){
    console.log(this,a,b,c);
}

const baadmechalnekeliyefunc = abcd.bind(obj3);
baadmechalnekeliyefunc();
