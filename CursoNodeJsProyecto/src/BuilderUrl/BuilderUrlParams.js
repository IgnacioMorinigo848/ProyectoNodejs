export function BuildUrl(media, categoria, value, actorId) {
  let url = "";
  const apiKey = "425c2d87b8b9c812c4101db1f80fd9e5";
  const baseUrl = "https://api.themoviedb.org/3";
  const categoriasMovie = {
    "Action": "28",
    "Animation": "16",
    "Fiction": "878",
    "Crime": "80",
    "Comedy": "35",
    "Fantasy": "14",
    "Mystery": "9648",
    "Romance": "10749",
    "Suspense": "53",
    "Drama": "18",
    "Family": "10751",
    "Adventure": "12",
    "Horror": "27"
  };
  const categoriasTV = {
    "Action and Adventure": "10759",  
    "Animation": "16",
    "Science Fiction": "10765",    
    "Crime": "80",
    "Comedy": "35",
    "Fantasy": "14",
    "Mystery": "9648",
    "Romance": "10749",
    "Drama": "18",
    "Family": "10751",
    "Adventure": "10759",         
    "Horror": "27"
};


  if (media === "movie" && value) {
      url = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${value}&include_adult=false`;
  } else if (media === "tv" && value) {
      url = `${baseUrl}/search/tv?api_key=${apiKey}&language=en-US&query=${value}&include_adult=false`;
  } else if (media === "person" && value) {
      url = `${baseUrl}/search/person?api_key=${apiKey}&language=en-US&query=${value}&include_adult=false`;
  } else if (media === "person" && actorId) {
      url = `${baseUrl}/person/${actorId}/combined_credits?api_key=${apiKey}&language=en-US`;
  } else if (media === "movie" && categoria && categoriasMovie[categoria]) {
      url = `${baseUrl}/discover/${media}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${categoriasMovie[categoria]}`;
  }else if (media === "tv" && categoria && categoriasTV[categoria]) {
    url = `${baseUrl}/discover/${media}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${categoriasTV[categoria]}`;
  }else if (media && !categoria) {
      url = `${baseUrl}/${media}/popular?api_key=${apiKey}&language=en-US&page=1`;
  }

  return url;
}
