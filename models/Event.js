const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    
    const eventSchema = new Schema({
        user_id: String,
        timeline_id: String,
        title: {type:String, required: true},
        date: {type:Date,required: true},
        description:{type: String,required: true},
        image: String,
        place: String,
        review: String,
        rating: Number,
        author: String,
        people: String,  
    
    });
    const Event = mongoose.model("Event", eventSchema);
    
    
    module.exports = Event;
        