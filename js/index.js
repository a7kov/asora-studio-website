const boxstaff = document.getElementById("staff_list");

const API = "https://discord-web-api.glitch.me/discord/user/";

const staff = [
    {
        "id": "759407706708115491",
        "post": "Fondatrice",

    }, 
       {
        "id": "967870424178368522",
        "post": "Fondateur",
     }
]

for (let indexOne = 0; indexOne < staff.length; indexOne++) {
    const elementstaff = staff[indexOne];

    $.getJSON(API + elementstaff.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../img/banner.png");
                }, 1000);
            }

            const equipeList = "<div id='trigger' class='card3' style='margin: 15px; font-family: 'Patrick Hand', cursive;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><br><br><h2 class='name'>" + output.username + "</h2><center><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000; font-family: 'Patrick Hand', cursive;'>" + elementstaff.post + "</h2></div></center></div>"
            boxstaff.innerHTML += equipeList;
        });
}
console.log("js fonctionnel");