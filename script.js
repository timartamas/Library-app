document.getElementById("authorname").value = ""
document.getElementById("pages").value = ""
document.getElementById("bookname").value =""


let radioBtns = document.querySelectorAll("input[name='yesno']")
let selected
let findSelected = () => {
    selected = document.querySelector("input[name='yesno']:checked").value

}
            
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected)
})
        
findSelected()
            
let library = []

const myArray = []



const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const cancelBtn = document.getElementById("cancelBtn")

const saveBtn = favDialog.querySelector("#saveBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

cancelBtn.addEventListener('click', ()=>{
    document.getElementById("authorname").value = ""
    document.getElementById("pages").value = ""
    document.getElementById("bookname").value =""
    favDialog.close("CLOSED")
})


    const books = document.getElementsByClassName("book-containers")
    const arrRmBtns = document.getElementsByClassName("arrRmBtns")




saveBtn.addEventListener('click', ()=>{
    
    let authorName = document.getElementById("authorname").value
    let pages = document.getElementById("pages").value
    let bookName = document.getElementById("bookname").value

    if(authorName == "" || pages == "" || bookName == ""){
        alert("\n**Error**\nPlease fill all the inputs fields.\nOne or more textboxes are empty.")
       
    }else{
    class Polygon {
        constructor() {
        this.read = selected
        this.aName = authorName
        this.bName = bookName
        this.nPages = pages

        }
    }
                
    let polyx = new Polygon();

                    

    library.push(polyx)

    library.forEach(function(element) {
        console.log(element)
    })
            
    document.getElementById("authorname").value = ""
    document.getElementById("pages").value = ""
    document.getElementById("bookname").value = ""


    for(i=0; i<library.length; i++){
        console.log("Author's name: "+library[i].aName)
        console.log("Book's name: "+library[i].bName)
        console.log("How many pages: "+library[i].nPages)
        console.log("Did you read it: "+library[i].read)
    }


    const right = document.getElementById('right')
    const book = document.createElement('div')
    for(i=0; i<library.length; i++){
        
        const removeButton = document.createElement("button")
        let x = "button-"+i
        let y = "div-"+i
        removeButton.setAttribute('id', x)
        removeButton.classList.add("removeButtons")
        removeButton.textContent = "Delete"

        



        const string="Book #"+(i+1)+
        "<br>Author's name: "+library[i].aName+
        "<br>Book's name: "+library[i].bName+
        "<br>Number of pages: "+library[i].nPages+
        "<br>Did you read the book: "+library[i].read+
        "<br><br>"+
        "<button class='arrRmBtns' id=remove-"+i+">Remove</button>"

        
        myArray.push(string)
        book.innerHTML = myArray[myArray.length-1]
        book.classList.add("book-containers")
        book.setAttribute('id', y)
        right.appendChild(book)

        

        
        const books = document.getElementsByClassName("book-containers")
        const arrRmBtns = document.getElementsByClassName("arrRmBtns")
        myFunction2()

        favDialog.close("CLOSED")
    }
}
})


function myFunction(){
    for(i=0; i<arrRmBtns.length; i++){
        let local = "div-"+i
        const element = document.getElementById(local)
        element.remove()
        console.log("local="+local)
        console.log("arrRmBtns[i]="+arrRmBtns[i])
    }
}

function myFunction2(){
    for(i=0; i<arrRmBtns.length; i++){
        arrRmBtns[i].addEventListener("click", myFunction)
    }
}
