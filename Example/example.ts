import { Youtube } from "..";

// MP3 Search and Download
new Youtube().ytmp3('Talking to the moon', true).then((res) => console.log(res))