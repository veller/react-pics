import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4912a660c344865b52223b0278f47e7e91c6107099a7545b608ae8f6e33d1a19"
  }
});
