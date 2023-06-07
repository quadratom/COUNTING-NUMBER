let count = 0

let decrement = document.getElementById("decrement").onclick = function(){
count -=1
document.getElementById("labelnum").innerHTML = count
} 

let reset = document.getElementById("reset").onclick = function(){
    count = 0
    document.getElementById("labelnum").innerHTML = count
}

let increment = document.getElementById("increment").onclick = function(){
        count +=1
        document.getElementById("labelnum").innerHTML = count
 }