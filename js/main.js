const formEl = document.querySelector("#color-picker")
console.log(formEl);

 formEl.addEventListener("submit", function (event){
    event.preventDefault()
    let color = this.color.value
    document.body.style.backgroundColor = color
 })

 
 formEl.addEventListener("reset", function (event){
    event.preventDefault()
    document.body.style.backgroundColor = "white"
 })
