const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    
    const timelineSchema = new Schema({
        user_id: String,
        name: String,
        category: {type: String, enum: ["general", "trips", "books/movies/series", "family"] },
        events: { type: Schema.Types.ObjectId, ref: "Event" },
    });

const Timeline = mongoose.model("Timeline", timelineSchema);
    
module.exports = Timeline;
        
       