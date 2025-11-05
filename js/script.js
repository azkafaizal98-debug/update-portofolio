// Card
let card = document.getElementById("card")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
// Skill
let skill = document.getElementById("skill")
let skill2 = document.getElementById("skill2")
let skill3 = document.getElementById("skill3")
let skill4 = document.getElementById("skill4")
let skill5 = document.getElementById("skill5")
// Img 
let img = document.getElementById("img")
// Hover
let hover = document.getElementById("hover")
let hover2 = document.getElementById("hover2")
let hover3 = document.getElementById("hover3")

// Logo
hover.addEventListener("mousemove", function(){
    hover.style.transform = "scale(1.2)"
    hover.style.transition = "1s"
})
hover.addEventListener("mouseout", function(){
    hover.style.transform = "none"
    hover.style.color = "white"
})
hover2.addEventListener("mousemove", function(){

    hover2.style.transform = "scale(1.2)"
    hover2.style.color = "orange"
    hover2.style.transition = "1s"
})
hover2.addEventListener("mouseout", function(){
    hover2.style.transform = "none"
    hover2.style.color = "white"
})
hover3.addEventListener("mousemove", function(){
    hover3.style.transform = "scale(1.2)"
    hover3.style.color = "orange"
    hover3.style.transition = "1s"
})
hover3.addEventListener("mouseout", function(){
    hover3.style.transform = "none"
    hover3.style.color = "white"
})

// Card
card.addEventListener("mousemove",function(){
    card.style.transform = "scale(1.1)"
    card.style.transition = "1s"
})

card.addEventListener("mouseout" ,function(){
    card.style.transform = "none"
})

card2.addEventListener("mousemove",function(){
    card2.style.transform = "scale(1.1)"
    card2.style.transition = "1s"
})

card2.addEventListener("mouseout" ,function(){
    card2.style.transform = "none"
})

card3.addEventListener("mousemove",function(){
    card3.style.transform = "scale(1.1)"
    card3.style.transition = "1s"
})

card3.addEventListener("mouseout" ,function(){
    card3.style.transform = "none"
})
    
// Skill

skill.addEventListener("click" ,function(){
    skill.style.background = "orange"
    skill.style.color = "white"
    skill.style.transform = "scale(1.1)"
    skill.style.transition = "1s"

    skill2.style.background = "none"
    skill2.style.color = "rgb(52, 52, 219"
    skill2.style.transform = "none"

    
    skill3.style.background = "none"
    skill3.style.color = "white"
    skill3.style.transform = "none"

    skill4.style.background = "none"
    skill4.style.color = "yellow"
    skill4.style.transform = "none"

    skill5.style.background = "none"
    skill5.style.color = "black"
    skill5.style.transform = "none"

    img.style.transform = "none" 
})

skill2.addEventListener("click" ,function(){
    skill.style.background = "none"
    skill.style.color = "orange"
    skill.style.transform = "none"

    skill2.style.background = "rgb(52, 52, 219"
    skill2.style.color = "white"
    skill2.style.transform = "scale(1.1)"
    skill2.style.transition = "1s"

    
    skill3.style.background = "none"
    skill3.style.color = "white"
    skill3.style.transform = "none"

    skill4.style.background = "none"
    skill4.style.color = "yellow"
    skill4.style.transform = "none"

    skill5.style.background = "none"
    skill5.style.color = "black"
    skill5.style.transform = "none"

    img.style.transform = "none"
})

skill3.addEventListener("click" ,function(){
    skill.style.background = "none"
    skill.style.color = "orange"
    skill.style.transform = "none"
   

    skill2.style.background = "none"
    skill2.style.color = "rgb(52, 52, 219"
    skill2.style.transform = "none"

    skill3.style.background = "orangered"
    skill3.style.color = "white"
    skill3.style.transform = "scale(1.1)"
    skill3.style.transition = "1s"

    
    skill4.style.background = "none"
    skill4.style.color = "yellow"
    skill4.style.transform = "none"

    skill5.style.background = "none"
    skill5.style.color = "black"
    skill5.style.transform = "none"

    img.style.transform = "none"
})

skill4.addEventListener("click" ,function(){
    skill.style.background = "none"
    skill.style.color = "orange"
    skill.style.transform = "none"
   

    skill2.style.background = "none"
    skill2.style.color = "rgb(52, 52, 219"
    skill2.style.transform = "none"

    skill3.style.background = "none"
    skill3.style.color = "white"
    skill3.style.transform = "none"

    skill4.style.background = "yellow"
    skill4.style.color = "white"
    skill4.style.transform = "scale(1.1)"
    skill4.style.transition = "1s"

    skill5.style.background = "none"
    skill5.style.color = "black"
    skill5.style.transform = "none"

    img.style.transform = "none"
})

skill5.addEventListener("click" ,function(){
    skill.style.background = "none"
    skill.style.color = "orange"
    skill.style.transform = "none"
   

    skill2.style.background = "none"
    skill2.style.color = "rgb(52, 52, 219"
    skill2.style.transform = "none"

    skill3.style.background = "none"
    skill3.style.color = "white"
    skill3.style.transform = "none"

    skill4.style.background = "none"
    skill4.style.color = "yellow"
    skill4.style.transform = "none"

    skill5.style.background = "black"
    skill5.style.color = "white"
    skill5.style.transform = "scale(1.1)"
    skill5.style.transition = "1s"

    img.style.transform = "none"
})

img.addEventListener("click" ,function(){
    skill.style.background = "none"
    skill.style.color = "orange"
    skill.style.transform = "none"
   

    skill2.style.background = "none"
    skill2.style.color = "rgb(52, 52, 219"
    skill2.style.transform = "none"

    skill3.style.background = "none"
    skill3.style.color = "white"
    skill3.style.transform = "none"

    skill4.style.background = "none"
    skill4.style.color = "yellow"
    skill4.style.transform = "none"

    skill5.style.background = "none"
    skill5.style.color = "black"
    skill5.style.transform = "none"

    img.style.transform = "scale(1.1)"
    img.style.transition = "1s"
})

img.addEventListener("mouseout" ,function(){
    skill.style.background = "none"
    skill.style.color = "orange"
    skill.style.transform = "none"
   

    skill2.style.background = "none"
    skill2.style.color = "rgb(52, 52, 219"
    skill2.style.transform = "none"

    skill3.style.background = "none"
    skill3.style.color = "white"
    skill3.style.transform = "none"

    skill4.style.background = "none"
    skill4.style.color = "yellow"
    skill4.style.transform = "none"

    skill5.style.background = "none"
    skill5.style.color = "black"
    skill5.style.transform = "none"

    img.style.transform = "none"
})


