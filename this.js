// Topic:- this call apply

// this keyword js main one of the most suspensefyl keyword
// keyword ka matlab hota hai aisa words jiska koi mtlb ho programming lang main
// this ki value baar baar badal sakti hai alag alag conditions main, saari conditions ko seekh jaao to this samjh jaoge 

// this value in different conditions:-
// global - window
console.log(this);


// function - window
function abcd(){
    console.log(this);
}
abcd();

// function inside object called method
// method - object
var obj ={
    name: function(){
        console.log(this);
    },
    age: 25,
    email: "asdfg"
}
obj.name();


// fnc inside method (es5) - window
var obj2 = {
    satName: function(){
        // console.log(this);
        function childfnc(){
            console.log(this);
        }

        childfnc();
    },
    age:25
}
obj2.satName();

// fnc inside method (es6) - object
var obj = {
    name: function(){
        const child = ()=>{
            console.log(this)
        }
        child();
    }
}
obj.name();


// constructor fnc(run using new keyword) mein this ki value - new blank object
function add(){
    console.log(this);
}
const ans = new add();

// event listener mein this ki value - that element jispar event listenter laga ho
document.querySelector("button").addEventListener("click",function(){
    console.log(this);
})


