import React, {useEffect, useState} from 'react';


const fetchData = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=Txc7ZwMQNMBcQn9tWVpPKlsDRbbW02ZSDaAjG085");
    return await response.json();
}


const MainPageComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData().then((data) => {
            setData(data)
        })
    }, [])
    return (
        <div>
            <h1> {data.title} </h1>
            <img  style={{"height" : "auto", "width" : "100%"}} src={data.hdurl}/>
            <p> {data.explanation}</p>
        </div>
    );
}


export default MainPageComponent;