import axios from "axios"

const token = "?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_TOKEN}`,

    },
})

