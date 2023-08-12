
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}
interface Details {
    author: string;
    year: string;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Fernando Duran",
        year: "2016"
    }
}



const { song, songDuration:duration, details } = audioPlayer;
const { author } = details;

// console.log('Song', audioPlayer.song)
// console.log('Duration :>> ', audioPlayer.songDuration);
// console.log('Author :>> ', audioPlayer.details.author);

console.log('song :>> ', song);
console.log('author :>> ', author);
console.log('duration :>> ', duration);

export  {
    
}