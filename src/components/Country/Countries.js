

const Countries = (props) => {
    const {name, capital, region,flag} = props.countryName;
    const handleCountry = props.handleCountry;
    

    const styles = {
        height: "200px",
        width: "300px",
        border: "1px solid gray"
    }
    return (
        <div style={{textAlign: "center" , border: "1px solid gold", margin: "10px", padding: "10px"}}>
            <h4>{name}</h4>
            <img style={styles} src={flag} alt="flag"/>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleCountry(props.countryName)}>Details</button>
        </div>
    );
};

export default Countries;