const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    
    const timelineSchema = new Schema({
        name: String,
        date: String,
        description: String,
        category: {type: String, enum: ["general", "trips", "books/movies/series", "family"] },
        id_tags: { type: Schema.Types.ObjectId, ref: "Tag" },
        image: String,
    
    });
    const Timeline = mongoose.model("Timeline", timelineSchema);
    
    
    module.exports = Timeline;
        
       