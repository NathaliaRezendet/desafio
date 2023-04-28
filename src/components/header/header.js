import '../header/header.css'
import search from '../../assets/img/search.png'
import person from '../../assets/img/person.png'
import cart from '../../assets/img/cart.png'
import one from '../../assets/img/numberOne.png'

function header() {
    return (
        <div className="header">
            <div className="container">
                <div className='mobile-menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <div className="container-input">
                    <p>O que está procurando?</p>
                    <img className="searchIcon" src={search} />
                </div>

                <div className='container-profile'>
                    <div className='container-person'>
                        <img className="icons" src={person} />
                        <p>Minha Conta</p>
                    </div>

                    <div className='container-cart'>
                        <img className="icons" src={cart} />
                        <img className="icons" src={one} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default header