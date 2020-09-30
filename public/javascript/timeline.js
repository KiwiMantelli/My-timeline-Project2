console.log("timeline js connected");
const timeline = document.getElementById('timeline-section');

window.addEventListener('load', () => {

    function getEvents () {
        const fullPathName = window.location.pathname;
        const timelineId = fullPathName.slice(10, -8);
        console.log(timelineId);
        axios.get(`http://localhost:3000/timeline/getEvents/timelineId`)
        .then(res => {
            const data = res.data;
            displayEvents(data);
            console.log(data)});
    }
    getEvents();

    });


function displayEvents(events) {
    for(let i =0; i < events.length; i++) {
    
        if(i%2 === 0) {
            console.log(events);
            timeline.innerHTML +=`        
            <div class="container">
                <div class="timeline"></div>
                <div class="event">
                    <h3 class="date date-left">${events[i].date}</h3>
                    <div class="card card-right">
                        <img src="/${events[i].image}" alt="placeholder image" id="card-image">
                        <div class="card-content">
                            <h3 class="card-title">${events[i].title}</h3>
                            <p>${events[i].description}</p>
                            <a href="/timeline/event/details/${events[i]._id}">See more</a>
                        </div>
                    </div>
                </div>
            </div>`
        }
    
        else {
            timeline.innerHTML +=`
            <div class="container">
                <div class="timeline"></div>
                    <div class="event">
                    <h3 class="date date-right">${events[i].date}</h3>
                    <div class="card card-left">
                        <img src="/${events[i].image}" alt="placeholder image" id="card-image">
                        <div class="card-content">
                            <h3 class="card-title">${events[i].title}</h3>
                            <p>${events[i].description}</p>
                            <a href="/timeline/event/details/${events[i]._id}">See more</a>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }

}