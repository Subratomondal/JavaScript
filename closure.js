// closures
// ek function ja return kare doosra function, aur use kare parent function ka koi variable

function abcd(){
    var a = 12;
    return function(){
        console.log(a);
    }
}
var ans = abcd();
ans();




// function z(){
//     var b= 100;
//     function x(){
//         var a= 10;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();