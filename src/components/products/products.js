import '../products/products.css'
import left from '../../assets/img/leftBlack.png'
import right from '../../assets/img/rightBlack.png'
import tennis from '../../assets/img/tennis.png'
import starOrange from '../../assets/img/starOrange.png'
import star from '../../assets/img/star.png'
import cartWhite from '../../assets/img/cartWhite.png'
import data from '../../json/products.json'

export default function products() {
    return (
        <div className="products-container">
            <div className="title-container">
                <h1>Produtos</h1>
                <div className="line"></div>
            </div>
            <div className='navigation-container'>
                <img className='arrow-left' src={left} />
              
               <div className='wrap'>

               
                { data.products.map((item, i)=> ( 

                <div key={i} className='card-container'>
                    <img className='tennis' src={tennis}/>
                    <p className='product-name'>{item.name}</p>
                    <div className='star-container'>
                        <img src={starOrange}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                    </div>
                    <p className='product-old-price'>de R$ {item.oldPrice.toFixed(2).replace('.',',')}</p>
                    <p className='product-price'>por {item.price.toFixed(2).replace('.',',')}</p>
                    <p className='product-installments'>ou em {item.installments}x de R$ {item.installments_price.toFixed(2).replace('.',',')}</p>
                    <button className='btn-buy'><img src={cartWhite}/> Comprar</button>
                </div>
                ))}
                </div>
                    <img className='arrow-right' src={right} />
                </div>
                
        </div>
    )
}