const add = document.getElementById("add")
const remove = document.getElementById("remove")
const input = document.querySelector("input")
const form = document.querySelector("form")
const choresWrapper = document.getElementById("chores")



document.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.dataset.add){
        console.log(input.value)
       addChore(input.value)
   }
   if(e.target.dataset.remove){
      removeChore()
   }
   if(e.target.id === "remove-chore"){
         alert("coming soon")
   }
    
})


function addChore(chore){
    const newDiv = document.createElement("div")
    const paragraph = document.createElement("p")
    const paragraph2 = document.createElement("p")
    newDiv.setAttribute("class","chore")
    paragraph.textContent = chore
    paragraph.setAttribute("class","chore-text")
    paragraph2.setAttribute("id","remove-chore")
    paragraph2.textContent = "remove"
    newDiv.appendChild(paragraph)
    newDiv.appendChild(paragraph2)
    choresWrapper.appendChild(newDiv)
    input.value = ""
}

function removeChore(){
    choresWrapper.textContent = " " 
}
 //function remove(id){
    //give each chore(div) an id
    
 //}