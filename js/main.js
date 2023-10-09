



// End the poupBox and gallary
let ourGallary = document.querySelectorAll(".gallary .our-photo img")

ourGallary.forEach(img => {
    img.addEventListener("click" , e => {
   let overLayy= document.createElement("div")
   overLayy.className = 'popup-overlay';
   document.body.appendChild(overLayy);
// creat div to khnow cofffe
let popupBox = document.createElement("div");
popupBox.className = 'popup-Box';
let popuoImag = document.createElement("img")

popuoImag.src = img.src
popupBox.appendChild(popuoImag);
document.body.appendChild(popupBox)

let creatHeading = document.createElement("h1")
let creatTextHeading = document.createTextNode("Turkish Coffe")
creatHeading.appendChild(creatTextHeading);
popupBox.appendChild(creatHeading);
let creatPText = document.createElement("p");
let creatTextp = document.createTextNode("With my coffee, I’m strong enough to destroy you, and hot to burn you,Life is too short, it’s just enough for a coffee ,When I want to express my love to you, I will offer you a cup of coffee")
creatPText.appendChild(creatTextp)
popupBox.appendChild(creatPText)

let creatSpan = document.createElement("span");
let craetTextSpan = document.createTextNode("X");
creatSpan.className = 'close-btn'
creatSpan.appendChild(craetTextSpan);
popupBox.appendChild(creatSpan);

creatSpan.onclick = () => {
    popupBox.remove()
    overLayy.remove()
}

    })
})
// End the Gallary

let clickBtn = document.querySelector(".buy-coffe .box-buy .count-buy .buy-button button");

clickBtn.onclick = ()=> {
    let creatDive = document.createElement("div");
    let creatText = document.createTextNode("You Add a coffe in you carbit");
  creatDive.appendChild(creatText);
  document.body.appendChild(creatDive);
  creatDive.className = 'car-bt'

}

console.log(clickBtn)