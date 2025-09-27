import { v4 as uuidv4 } from "https://esm.sh/uuid@9";

const input = document.getElementById("chore-input")
const form = document.getElementById("overlay-form")
const choresWrapper = document.getElementById("chores")

let chores = JSON.parse(localStorage.getItem("chores"))||[]
window.addEventListener("DOMContentLoaded", () => {
  let username = localStorage.getItem("name")
     if (!username){
        document.getElementById("overlay").style.display = "flex"
     }else{
        document.getElementById("greeting").textContent = `Welcome back ${username}`
     }
    renderAll();
});

document.addEventListener("click", function(e){
   
    if(e.target.dataset.add){
         e.preventDefault()
             addChore(input.value)
        }

   if(e.target.dataset.remove){
     e.preventDefault()
    remove()
   }
   if(e.target.classList.contains("remove-chore")){
     e.preventDefault()
    removeChore(e.target.id)
   }
   })
    




function addChore(chore){
   let newChore = {
        id:uuidv4(),
        text:chore
    }
    chores.push(newChore)
    renderAll()
    save()
}

function removeChore(id){
   chores = chores.filter( chore => chore.id !== id)
   renderAll()
}
 function remove(){
    choresWrapper.textContent = ""
    localStorage.removeItem("chores")
    
 }
 function render(newChore){

    const newDiv = document.createElement("div")
    newDiv.setAttribute("class","chore")
    

    const paragraph = document.createElement("p")
    paragraph.textContent = newChore.text
    paragraph.setAttribute("class","chore-text")


    const paragraph2 = document.createElement("p")
    paragraph2.setAttribute("class","remove-chore")
    paragraph2.setAttribute("id",newChore.id)
    paragraph2.textContent = "remove"
    
   
    newDiv.appendChild(paragraph)
    newDiv.appendChild(paragraph2)
    choresWrapper.appendChild(newDiv)

    input.value = ""
 }

 function renderAll(){
    choresWrapper.textContent = ""
    chores.forEach(render)
 }
 
 function save(){
    localStorage.setItem("chores",JSON.stringify(chores))
 }

  form.addEventListener("submit",function(e){
    console.log("clicked")
    e.preventDefault()
    localStorage.setItem("name",document.getElementById("name").value)
    document.getElementById("overlay").style.display = "none"
    document.getElementById("greeting").textContent = `Welcome  ${document.getElementById("name").value}`
 })
 