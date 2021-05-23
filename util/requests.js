const API_KEY = process.env.API_KEY;
export default {
    fetchTrending:{
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url:   `/movie/top_rated?api_key=${API_KEY}&language=en-US`   
    },
    fetchActionMovies: {
        title: 'Action',
        url:   `/discover/movie?api_key=${API_KEY}&with_genres=28`   
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=35`   
    },
    fetchHorrorMovies: {
        title: 'Horro',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=27`   
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=10749`   
    },
    fetchMystery: {
        title: 'Mystery',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=10749`   
    },
    fetchSciFi: {
        title: 'sci-fi',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=878`   
    },
    fetchWestern: {
        title: 'Western',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=37`   
    },
    fetchAnimation: {
        title: 'Animation',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=16`   
    },
    fetchTV: {
        title: 'Tv Movie',
        url:   `/movie/movie?api_key=${API_KEY}&with_genres=10770`   
    },
};