import React, {useEffect, useState} from 'react';

const fetchData = async (previous) => {
    console.log(previous)
    if (previous === undefined) {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=Txc7ZwMQNMBcQn9tWVpPKlsDRbbW02ZSDaAjG085");
        return await response.json();
    } else {
        const response = await fetch("https://api.nasa.gov/planetary/apod/?api_key=Txc7ZwMQNMBcQn9tWVpPKlsDRbbW02ZSDaAjG085&date=" + previous);
        return await response.json();
    }
}


const MainPageComponent = () => {
    const [data, setData] = useState([]);
    const [state, setState] = useState("");
    useEffect(() => {
        fetchData(state).then((data) => {
            setData(data)
        })
    }, [state]);

    function getCurrentDate() {
        if (!state) return new Date().toJSON().slice(0, 10);
        else return state;
    }

    return (
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <label htmlFor="previous">Choose date: </label>
            <input type="date" id="previous" name="previous"
                   onChange={previous => setState(previous.target.value)}
                   max="<?= date('Y-m-d'); ?"
                   value={getCurrentDate()}
            ></input>
            <h2> {data.title} </h2>
            <img  style={{"height" : "auto", "width" : "800px"}} src={data.hdurl}/>
            <div className={"card"}>
                <div id={"explanation"}>
                    <p> {data.explanation}</p>
                </div>
            </div>
        </div>
    );
}


export default MainPageComponent;