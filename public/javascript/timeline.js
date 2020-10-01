console.log("timeline js connected");
const timeline = document.getElementById('timeline-section');

window.addEventListener('load', () => {

    function getEvents () {
        const fullPathName = window.location.pathname;
        const timelineId = fullPathName.slice(10, -8);
        console.log(timelineId);
        axios.get(`/timeline/getEvents/timelineId`)
        .then(res => {
            const data = res.data;
            displayEvents(data);
            console.log(data)})
            .catch(error=> console.log(error));
    }
    getEvents();

    });

const months = ["Months","January","February","March","April","May","June","July","August","September","October","November","December"];


function displayEvents(events) {
    for(let i =0; i < events.length; i++) {
        const year = events[i].date.slice(0,4);
        const month = months[Number(events[i].date.slice(5,7))];
        const day = events[i].date.slice(8,10);
        if(i%2 === 0) {
            console.log(events);
            timeline.innerHTML +=`        
            <div class="container">
                <div class="timeline"></div>
                <div class="event">
                    <h3 class="date date-left">${day} ${month}, ${year}</h3>
                    <div class="card card-right">
                        <img src="${events[i].image}" alt="placeholder image" id="card-image">
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
                    <h3 class="date date-right">${day} ${month}, ${year}</h3>
                    <div class="card card-left">
                        <img src="${events[i].image}" alt="placeholder image" id="card-image">
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