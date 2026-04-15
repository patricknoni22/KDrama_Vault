
// export default function Tvnpage() {
//     return (
//         <>
           
//             <div className="inthing">
//                 <h1>TVN </h1>
//                 <div className="individuals">
//                     <div className="inmain">
//                         <img src="./" alt="image" className="inimg" />
//                         <h3>title</h3>
//                     </div>

//                     <div className="inone">
//                         <p>status</p>
//                         <p>Rating</p>
//                     </div>
//                     <div className="intwo">
//                         <span className="inthree">
//                             <p>2019</p>
//                             <p>Year</p>
//                         </span>
//                         <span className="inthree">
//                             <p>16</p>
//                             <p>episodes</p>
//                         </span>
//                         <span className="inthree">
//                             <p>Romance</p>
//                             <p>Genre</p>
//                         </span>

//                     </div>

//                     <div className="insy">
//                         <h4>synopsis</h4>

//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, harum id maxime qui obcaecati culpa cumque odit. Recusandae sit possimus quibusdam aliquam corrupti minima dignissimos. Quaerat, excepturi. Ex, voluptatum ut.</p>

//                     </div>

//                 </div>
          


//             </div>




//         </>
//     );
// }


import React, { useEffect, useState } from "react";
import { fetchByNetwork } from "../api";

const TVNSection = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetchByNetwork(213).then((data) => {
            setShows(data.results);
        });
    }, []);
 
    return (
        <div className="inthing">
            <h1>TVN</h1>

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

export default TVNSection;