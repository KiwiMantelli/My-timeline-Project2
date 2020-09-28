console.log("connected");
const timeline = document.getElementById('timeline-section');

const events = ["a", "b", "c","d","e", "f", "g", "h", "i","j"];

for(let i =0; i < events.length; i++) {

    if(i%2 === 1) {

        timeline.innerHTML +=`<div class="container"><div class="timeline"></div>
        <div class="event"><h3 class="date-left">Date</h3><div class="card card-right"><h3>Title</h3><p>Infos</p></div></div></div>`
    }

    else {
        timeline.innerHTML +=`<div class="container"><div class="timeline"></div>
        <div class="event"><h3 class="date-right">25/07/20</h3><div class="card card-left"><img src="/public/assets/placeholder-image.png" alt="image"><p>Title</p><p>Infos</p></div><div class="span"></div></div></div>`
    }
}