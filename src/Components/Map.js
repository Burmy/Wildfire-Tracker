import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import WildfireMarker from './WildfireMarker'
import VolcanoMarker from './VolcanoMarker'
import LocationinfoBox from './LocationinfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)


    const marker1 = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <WildfireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null;
    })

    const marker2 = eventData.map(ev => {
        if (ev.categories[0].id === 12) {
            return <VolcanoMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
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
                {marker1}
                {marker2}
            </GoogleMapReact>
            {locationInfo && <LocationinfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 38.1102802,
        lng: -100.9198163
    },

    zoom: 5
}
export default Map