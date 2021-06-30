const mongooes = require("mongoose");
mongooes.connect("mongodb://localhost:27017/nodejsmongotesting",{useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log("Connect succefully")).catch((err) => console.log(err));
const playlistSchema = new mongooes.Schema({
    name: {
        type:String,
        required: true
    },
    ctype: String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});
const Playlist = new mongooes.model("Playlist", playlistSchema);



const getDocuments = async()=>{
    const result = await Playlist.find({ctype:"Front end"}).select({_id:0,name:1});
    console.log(result);
}
getDocuments();