const boxstaff = document.getElementById("staff_list");

const API = "https://discord-web-api.glitch.me/discord/user/";

const staff = [
    {
        "id": "759407706708115491",
        "post": "Fondatrice",
        "banner": "https://cdn.discordapp.com/attachments/967874299992105000/1000402525058519111/thumb-1920-314574.png",

    }, 
       {
        "id": "967870424178368522",
        "post": "Fondateur",
        "banner": "https://cdn.discordapp.com/attachments/967874299992105000/1000399742741774386/zero-two.gif",
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
            const equipeList = "<div id='stflist'> <figure class='stfs hover'> <img src='"+ elementstaff.banner +"'> <figcaption> <img src='" + output.url +"' alt='Logo Pi' class='profile' /> <h2>" + output.username +"<span>" + elementstaff.post +"</span></h2> </figcaption> </figure>"
           
            boxstaff.innerHTML += equipeList;
        });
}
console.log("js fonctionnel");