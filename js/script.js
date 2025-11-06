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
// Nav
let nav = document.getElementById("nav")
let nav2 = document.getElementById("nav2")
let nav3 = document.getElementById("nav3")
let nav4 = document.getElementById("nav4")
let nav5 = document.getElementById("nav5")
let nav6 = document.getElementById("nav6")
// Button
let btn = document.getElementById("btn")
let type = document.getElementById("type")
// Tema 
let them = document.getElementById("them")
let body = document.getElementById("tema");

// Tema Dark And White



// Navigasi a
nav.addEventListener("mousemove", function () {
    nav.style.transform = "scale(1.2)"
    nav.style.color = "rgb(255, 81, 0)"
    nav.style.transition = "0.8s"
})
nav.addEventListener("mouseout", function () {
    nav.style.transform = "none"
    nav.style.color = "white"
})
nav2.addEventListener("mousemove", function () {
    nav2.style.transform = "scale(1.2)"
    nav2.style.color = "rgb(255, 81, 0)"
    nav2.style.transition = "0.8s"
})

nav2.addEventListener("mouseout", function () {
    nav2.style.transform = "none"
    nav2.style.color = "white"
})
nav3.addEventListener("mousemove", function () {
    nav3.style.transform = "scale(1.2)"
    nav3.style.color = "rgb(255, 81, 0)"
    nav3.style.transition = "0.8s"
})

nav3.addEventListener("mouseout", function () {
    nav3.style.transform = "none"
    nav3.style.color = "white"
})
nav4.addEventListener("mousemove", function () {
    nav4.style.transform = "scale(1.2)"
    nav4.style.color = "rgb(255, 81, 0)"
    nav4.style.transition = "0.8s"
})

nav4.addEventListener("mouseout", function () {
    nav4.style.transform = "none"
    nav4.style.color = "white"
})
nav5.addEventListener("mousemove", function () {
    nav5.style.transform = "scale(1.2)"
    nav5.style.color = "rgb(255, 81, 0)"
    nav5.style.transition = "0.8s"
})

nav5.addEventListener("mouseout", function () {
    nav5.style.transform = "none"
    nav5.style.color = "white"
})
nav6.addEventListener("mousemove", function () {
    nav6.style.transform = "scale(1.2)"
    nav6.style.color = "rgb(255, 81, 0)"
    nav6.style.transition = "0.8s"
})

nav6.addEventListener("mouseout", function () {
    nav6.style.transform = "none"
    nav6.style.color = "white"
})

// Logo
hover.addEventListener("mousemove", function () {
    hover.style.transform = "scale(1.2)"
    hover.style.transition = "1s"
})
hover.addEventListener("mouseout", function () {
    hover.style.transform = "none"
    hover.style.color = "white"
})
hover2.addEventListener("mousemove", function () {

    hover2.style.transform = "scale(1.2)"
    hover2.style.color = "orange"
    hover2.style.transition = "1s"
})
hover2.addEventListener("mouseout", function () {
    hover2.style.transform = "none"
    hover2.style.color = "white"
})
hover3.addEventListener("mousemove", function () {
    hover3.style.transform = "scale(1.2)"
    hover3.style.color = "orange"
    hover3.style.transition = "1s"
})
hover3.addEventListener("mouseout", function () {
    hover3.style.transform = "none"
    hover3.style.color = "white"
})

// Card
card.addEventListener("mousemove", function () {
    card.style.transform = "scale(1.1)"
    card.style.transition = "1s"
})

card.addEventListener("mouseout", function () {
    card.style.transform = "none"
})

card2.addEventListener("mousemove", function () {
    card2.style.transform = "scale(1.1)"
    card2.style.transition = "1s"
})

card2.addEventListener("mouseout", function () {
    card2.style.transform = "none"
})

card3.addEventListener("mousemove", function () {
    card3.style.transform = "scale(1.1)"
    card3.style.transition = "1s"
})

card3.addEventListener("mouseout", function () {
    card3.style.transform = "none"
})


// Tema Dark And White
them.addEventListener("click", function () {
    if (them.classList.contains("fa-moon")) {
        them.classList.remove("fa-moon");
        them.classList.add("fa-sun");
        body.classList.add("mode");
        them.style.color = " #FFA94D";
        nav.style.color = "rgb(255, 81, 0)"
        nav2.style.color = "rgb(255, 81, 0)"
        nav3.style.color = "rgb(255, 81, 0)"
        nav4.style.color = "rgb(255, 81, 0)"
        nav5.style.color = "rgb(255, 81, 0)"
        nav6.style.color = "rgb(255, 81, 0)"
    } else {
        them.classList.remove("fa-sun");
        them.classList.add("fa-moon");
        body.classList.remove("mode");
        them.style.color = " #DDE1E7";
        nav.style.color = "white"
        nav2.style.color = "white"
        nav3.style.color = "white"
        nav4.style.color = "white"
        nav5.style.color = "white"
        nav6.style.color = "white"
    }
});


// Type
btn.addEventListener("click", function () {
    if (type.style.display !== "none") {
        // Menyembunyikan dengan animasi hinge
        type.classList.remove("animate__jackInTheBox");
        type.classList.add("animate__hinge");
        setTimeout(function () {
            type.style.display = "none";
            type.classList.remove("animate__hinge");
        }, 2000);
    } else {
        // Menampilkan dengan animasi jackInTheBox
        type.style.display = "block";
        type.classList.add("animate__jackInTheBox");
        setTimeout(function () {
            type.classList.remove("animate__jackInTheBox");
        }, 1000); // Durasi jackInTheBox sekitar 1s
    }
});

btn.addEventListener("click", function () {
    if (btn.style.background === "white")
        btn.style.background = "none"
    else {
        btn.style.background = "white"
    }
})

btn.addEventListener("click", function () {
    if (btn.style.color === "black")
        btn.style.color = "white"
    else {
        btn.style.color = "black"
    }
})

btn.addEventListener("click", function () {
    if (btn.style.border === "2px solid black")
        btn.style.border = " 2px solid white"
    else {
        btn.style.border = "2px solid black"
    }
})

btn.addEventListener("click", function () {
    if (btn.textContent === "Click Me to Type")
        btn.textContent = "Click Me To Remove"
    else {
        btn.textContent = "Click Me to Type"
    }
})

btn.addEventListener("mousemove", function () {
    // btn.style.border = "2px solid rgb(255, 81, 0)"
    btn.style.transition = "0.8s"
    btn.style.boxShadow = " 0 5px 20px -10px var(--orange)"
})
btn.addEventListener("mouseout", function () {
    // btn.style.border = "2px solid white"
    btn.style.transition = "0.8s"
    btn.style.boxShadow = "none"
})



// Skill

skill.addEventListener("click", function () {
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

skill2.addEventListener("click", function () {
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

skill3.addEventListener("click", function () {
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

skill4.addEventListener("click", function () {
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

skill5.addEventListener("click", function () {
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

img.addEventListener("click", function () {
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

img.addEventListener("mouseout", function () {
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


