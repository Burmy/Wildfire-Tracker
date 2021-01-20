import { Icon } from '@iconify/react'
import locationIcon from "@iconify/icons-mdi/abjad-arabic";

const VolcanoMarker = ({ onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default VolcanoMarker