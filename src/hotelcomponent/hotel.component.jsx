import paramount from './../../src/assets/paramount.jpg'
import tajdubai from './../../src/assets/tajdubai.jpg'
import atlantis from './../../src/assets/atlantis.jpg'
import tower from './../../src/assets/tower.jpg'
import "./hotel.component.css"

export function HotelComponent() {
    return (
        <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="menu-section-heading">Hotels</h3>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow menu-item-card p-3 mb-3">
                            <img src={paramount} className="card-img" alt="Hotel" />
                            <h4 className="menu-card-title">Para Mount Hotel</h4>
                            <a href="/hotels?hotelname=Para Mount Hotel" className="menu-item-link">View Reviews</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow menu-item-card p-3 mb-3">
                            <img src={tajdubai} className="card-img" alt="Hotel" />
                            <h4 className="menu-card-title">Taj Dubai</h4>
                            <a href="/hotels?hotelname=Taj Dubai" className="menu-item-link">View Reviews</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow menu-item-card p-3 mb-3">
                            <img src={atlantis} className="card-img" alt="Hotel" />
                            <h4 className="menu-card-title">Atlantis, The Palm</h4>
                            <a href="/hotels?hotelname=Atlantis" className="menu-item-link">View Reviews</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow menu-item-card p-3 mb-3">
                            <img src={tower} className="card-img" alt="Hotel" />
                            <h4 className="menu-card-title">The Tower Plaza Hotel</h4>
                            <a href="/hotels?hotelname=The Tower Plaza Hotel" className="menu-item-link">View Reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}











