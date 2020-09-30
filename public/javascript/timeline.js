console.log("timeline js connected");
const timeline = document.getElementById('timeline-section');

window.addEventListener('load', () => {
    /*document.getElementById('fetch-all').addEventListener('click', function (event) {
        charactersAPI.getFullList()
        .then(response => {
          container.innerHTML = '';
          response.data.forEach(entry => {
            console.log(entry);
            container.innerHTML += `<div class="character-info">
            <div>Id: ${entry.id}</div>
            <div class="name">Name: ${entry.name}</div>
            <div class="occupation">Occupation: ${entry.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${entry.cartoon}</div>
            <div class="weapon">Weapon: ${entry.weapon}</div>
          </div>`
          } )*/
        })
        .catch(err => console.log(err));
        
    });

    getFullList () {
        return axios
        .get(`${this.BASE_URL}/characters`);
    }



/*
const events = ["a", "b", "c","d","e", "f", "g", "h", "i","j"];

for(let i =0; i < events.length; i++) {

    if(i%2 === 0) {

        timeline.innerHTML +=`<div class="container"><div class="timeline"></div>
        <div class="event"><h3 class="date date-left">Date</h3><div class="card card-right"><h3>Title</h3><p>Infos</p></div></div></div>`
    }

    else {
        timeline.innerHTML +=`<div class="container"><div class="timeline"></div>
        <div class="event"><h3 class="date date-right">25/07/20</h3><div class="card card-left"><img src="/public/assets/placeholder-image.png" alt="image"><p>Title</p><p>Infos</p></div><div class="span"></div></div></div>`
    }
}*/