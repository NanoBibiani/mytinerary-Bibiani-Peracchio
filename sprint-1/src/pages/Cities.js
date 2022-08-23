import SitioWebLayout from '../layouts/SitioWebLayout';
import EventCarousel from '../componentes/EventCarousel';
import '../styles/carousel.css'

export default function Cities () {
    return (
        <div>
            <SitioWebLayout>
                <EventCarousel />
            </SitioWebLayout>
        </div>
    )
}