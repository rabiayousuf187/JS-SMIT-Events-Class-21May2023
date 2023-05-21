// Chapter 47 Events: mouse
console.log("Chapter 47 Events: mouse");
function show(){
    // console.log("show");
    // this.style.color = "red";
    document.getElementById('img-show').style.display = "block";

}

function hide(){
    console.log("Mouse out");
    document.getElementById('img-show').style.display = "none";

}

function inpFeild(){
    console.log("on Focus");
    document.getElementById('email').style.border = "3px solid red";

}

function outFeild(){
    console.log("on Blur");
    document.getElementById('email').style.border = "1px solid black";

}