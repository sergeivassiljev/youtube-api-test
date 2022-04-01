import axios from "axios";


const KEY = "AIzaSyCg2QPycUEoggZPhn91w7yAl1FGXxtLEpU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});
