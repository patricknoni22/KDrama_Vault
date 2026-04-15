const API_KEY = "3eef5da575375dd4c4ede418e3b240c1";

export const fetchByNetwork = async (networkId) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=${networkId}&with_origin_country=KR&sort_by=first_air_date.desc`
    );
    
    
    
    
  
    return res.json();
};
