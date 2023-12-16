function loadingScreen() {
    let tl1 = gsap.timeline()
    let tl2 = gsap.timeline()

    tl1.from("#progress-bar", {
        width: 0,
        duration: 8,
        delay: 0.5
    })
    tl1.to("#loader", {
        display: "none"
    })

    tl2.from("#one", {
        y: 10,
        opacity: 0,
        duration: 1,
        delay: 1
    })
    tl2.to("#one", {
        opacity: 0
    })
    tl2.from("#two", {
        y: -10,
        opacity: 0,
        duration: 1
    })
    tl2.to("#two", {
        opacity: 0
    })
    tl2.from("#three", {
        y: 10,
        opacity: 0,
        duration: 1
    })
}


function lockScreen() {

    let date = new Date();
    let ct = date.getHours() + ":" + date.getMinutes();


    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const year = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let day = weekday[date.getDay()];
    let month = year[date.getMonth()];
    let dat = date.getDate();
    let y = date.getFullYear();
    document.getElementById("disp_time").innerHTML = ct
    document.getElementById("disp_date").innerHTML = day + ", " + month + " " + dat + ", " + y;

    document.getElementById("btn").addEventListener("click", function enterHome() {
        gsap.to("#lock-screen", {
            y: "-100vh"
        })
    })

    gsap.to("#btn button", {
        x: -10,
        repeat: -1,
        duration: 0.5,
        yoyo: true
    })
}


function homeScreen() {
    let activeApp = null
    
    let icons = document.querySelectorAll(".icon");
    let apps = document.querySelectorAll(".app");

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", function (event) {
            event.preventDefault();
            if (activeApp !== null) {
                activeApp.style.display = "none"
            }
            if (apps[i].style.display === "block") {
                apps[i].style.display = "none"
            } else {
                apps[i].style.display = "block"
                activeApp = apps[i]
                gsap.from(".app", {
                    scale: 0.4,
                    duration: 0.8,
                    ease: "power3",
                    opacity: 0
                })
            }
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".app") && !event.target.closest(".icon")) {
                if (activeApp !== null) {
                    activeApp.style.display = "none"
                    activeApp = null
                }
                apps[i].style.display = "none";

            }
        });

    }
}

loadingScreen()
lockScreen()
homeScreen()





