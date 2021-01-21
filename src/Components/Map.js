import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import WildfireMarker from './WildfireMarker'
import LocationinfoBox from './LocationinfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)


    const marker = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <WildfireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null;
    })



    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAvDW3jMtrXvN46oS8PziYizdJZLT1PEyU' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {marker}

            </GoogleMapReact>
            {locationInfo && <LocationinfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 34.5354426,
        lng: -100.7000897
    },

    zoom: 5
}
export default Map