
import React, { useEffect, useState } from "react";
import { fetchByNetwork } from "../api";

const SBSSection = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetchByNetwork(156).then((data) => {
            setShows(data.results);
        });
    }, []);

    return (
        <div className="inthing">
            <h1>SBS</h1>

            {shows.map((show) => (
                <div className="individuals" key={show.id}>
                    <div className="inmain">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                            alt={show.name}
                            className="inimg"
                        />
                        <h3>{show.name}</h3>
                    </div>

                    <div className="inone">
                        <p>{show.status || "Ongoing"}</p>
                        <p>{show.vote_average}</p>
                    </div>

                    <div className="intwo">
                        <span className="inthree">
                            <p>{show.first_air_date?.split("-")[0]}</p>
                            <p>Year</p>
                        </span>

                        <span className="inthree">
                            <p>{show.number_of_episodes || "?"}</p>
                            <p>Episodes</p>
                        </span>

                        <span className="inthree">
                            <p>{show.genre_ids?.[0]}</p>
                            <p>Genre</p>
                        </span>
                    </div>

                    <div className="insy">
                        <h4>Synopsis</h4>
                        <p>{show.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SBSSection;