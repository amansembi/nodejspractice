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

const createDocument = async () =>{
    try{
        const designerPlaylist = new Playlist({
            name: "Designer",
            ctype: "Front end",
            videos:10,
            author:"JP softsolutions",
            active:true,
            
        });
        const phpPlaylist = new Playlist({
            name: "PHP with js",
            ctype: "Back and front end",
            videos:20,
            author:"JP softsolutions",
            active:true,
            
        });
        const wordpressPlaylist = new Playlist({
            name: "wordpress",
            ctype: "Back end Front end",
            videos:100,
            author:"JP softsolutions",
            active:true,
            
        });
        const ajaxPlaylist = new Playlist({
            name: "Ajax js",
            ctype: "Back end",
            videos:50,
            author:"JP softsolutions",
            active:true,
            
        });
        const htmlPlaylist = new Playlist({
            name: "HTML",
            ctype: "Front end",
            videos:90,
            author:"JP softsolutions",
            active:true,
            
        });
        const result = await Playlist.insertMany([designerPlaylist,phpPlaylist,wordpressPlaylist,ajaxPlaylist,htmlPlaylist]);
        console.log(result);
    }

    catch(err){
        console.log(err);
    }
}
    
createDocument();