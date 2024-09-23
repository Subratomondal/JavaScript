// event , click , dbclick, mouseover , input

//make event
// attach to some dom element
// dispatch that event from that dom element in which you attached the event
const yourevent = new Event("eventName");

document.querySelector("button").addEventListener("eventName",function(){
    alert("LEARNING JAVASCRIPT");
})

document.querySelector("button").dispatchEvent(yourevent);