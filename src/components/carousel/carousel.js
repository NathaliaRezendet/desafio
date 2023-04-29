import '../carousel/carousel.css'
import left from '../../assets/img/left.png'
import right from '../../assets/img/right.png'


function Carousel() {
    return (

        <div className="banner-container">

            <div className="banner1"></div>

            <div className="banner2">
                <div></div>
                <div></div>
            </div>

            <div className='container-phrase'>
                <div className='text-left'>
                    <img className="right" src={left} />
                    <div className='text-line'>
                        <p className='frase'>Teste Front-end: experiência de compra.</p>
                        <p className='frase-mob'>Nossa especialidade: experiência de compra.</p>
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