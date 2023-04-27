import '../carousel/carousel.css'
import banner from '../../assets/img/banner.png'
import left from '../../assets/img/left.png'
import right from '../../assets/img/right.png'
import ellipseOrange from '../../assets/img/ellipseOrange.png'
import ellipse from '../../assets/img/ellipse.png'
import line from '../../assets/img/line.png'
import back from '../../assets/img/back.png'

function Carousel() {
    return (

        <div className="banner-container">

            <div className="banner1"></div>

            <div className='banner2'>
                <img className="img2" src={back} />
            </div>

            <div className='container-phrase'>
                <div className='text-left'>
                    <img className="right" src={left} />
                    <div className='text-line'>
                        <p className='frase'>Teste Front-end: experiência de compra.</p>
                        <div className='line'></div>
                    </div>
                </div>
                <img className="right" src={right} />
            </div>

            <div className='ellipse-container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>


    )
}

export default Carousel;