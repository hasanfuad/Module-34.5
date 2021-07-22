import React from 'react';

const Countries = (props) => {
    const {name, capital, region,flag} = props.countryName;
    // console.log(props.countryName);

    const styles = {
        height: "200px",
        width: "300px",
        border: "1px solid gray"
    }
    return (
        <div style={{textAlign: "center"}}>
            <h4>{name}</h4>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <img style={styles} src={flag} alt="flag"/>
        </div>
    );
};

export default Countries;