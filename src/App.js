import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
// import wikipediajs from "wikipediajs";
import wiki from "wikijs";

import Map from "./components/Map";
import Info from "./components/Info";
import Summary from "./components/Summary";

function App() {
    React.useEffect(() => {
        wiki()
            .page("Batman")
            .then((page) => page.info("alterEgo"))
            .then(console.log); // Bruce Wayne
    },[])

    // const [selectedCountry, setSelectedCountry] = useState();

    function handleSelectCountry(name) {
        console.log(name);
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col col-md-9">
                    <Map handleSelectCountry={handleSelectCountry} />
                </div>
                <div className="col-12 col-md-3 ">
                    <Info />
                </div>
            </div>
            <div className="row mt-3">
                <Summary />
            </div>
        </div>
    );
}

export default App;
