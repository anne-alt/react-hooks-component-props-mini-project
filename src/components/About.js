import React from "react";

function About({image = "https://via.placeholder.com/215", logo, about}) {
    return(
        <aside>
           {!image ? <img src="https://via.placeholder.com/215" alt="blog logo"/> : <img src={image} alt="blog logo"/>}
           <p>{about}</p>

        </aside>
    )
}

export default About