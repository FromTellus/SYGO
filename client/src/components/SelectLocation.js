
const selectLocation = (props) => {

    const stockholm = {location: "Stockholm", latitude: 59.3293, longitude: 18.0686};
    const london = {location: "London", latitude: 51.5074, longitude: 0.1278};
    const newyork = {location: "New York", latitude: 40.7128, longitude: -74.0059};
    const paris = {location: "Paris", latitude: 48.8566, longitude: 2.3522};
    const berlin = {location: "Berlin", latitude: 52.5200, longitude: 13.4050};
    const moscow = {location: "Moscow", latitude: 55.7558, longitude: 37.6173};
    const tokyo = {location: "Tokyo", latitude: 35.6895, longitude: 139.6917};
    const sydney = {location: "Sydney", latitude: -33.8688, longitude: 151.2093};
    const seattle = {location: "Seattle", latitude: 47.6062, longitude: -122.3321};
    const goa = {location: "Goa", latitude: 15.2993, longitude: 74.1240};

    const handleChange = (e) => {
        const latitude = e.target.value.split(',')[0];
        const longitude = e.target.value.split(',')[1];
        props.setLatitude(latitude);
        props.setLongitude(longitude);

    }

    const locations = [stockholm, london, newyork, paris, berlin, moscow, tokyo, sydney, seattle, goa];
    const locationOptions = locations.map((location, index) => {
        return <option key={index} value={location.latitude + ',' + location.longitude}>{location.location}</option>
    }
    )
    return (
        <><select className="select--location" onChange={handleChange}>
            {locationOptions}
          </select>
        </>
    )
}

export default selectLocation;

