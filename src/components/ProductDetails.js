import React from 'react'
import {Link} from 'react-router-dom'

class Product extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        fetch(
            process.env.PUBLIC_URL + '/data/productsBase.json'
        ).then(
            response => response.json()
        ).then(
            products => this.setState({
                products: products
            })
        )
    }


    render() {


        const productId = parseInt(this.props.match.params.productId, 10)
        const product = this.state.products.find(
            product => product.id === productId
        )


        return (


            <div style={{color: 'white', background: 'linear-gradient(180deg, rgba(0,13,26,1) 0%, rgba(0,128,128,0.5) 100%)', boxShadow: '9px 9px 29px #21324f'}}>
                {product === undefined ? <div> Fetching</div> :
                    <div style={{border: '2px solid #FF7D00'}}>
                        <Link to={'/Search'}><img src="https://raw.githubusercontent.com/infoshareacademy/jfdz4-koty-app/productDetails-style/public/data/image/arrowBack.jpg" style={{float: 'left', height: '40px', width: '40px', marginLeft: '10px', marginTop: '10px', border: '2px solid orange', borderRadius: '10px'}}/></Link>
                        <div className="center" style={{marginBottom: '30px'}}><h1 style={{textTransform: 'uppercase', fontFamily: 'Verdana', fontWeight: '800', color: '#FF7D00'}}> {product.name} </h1></div>
                        <div className="row">
                        <div className="col-xs-3 col-xs-push-1">
                        <img className="img-responsive" src={product.image} style={{maxWidth: '100%', marginLeft: '4px', marginBottom: '8px', border: '1px solid #999999', boxShadow: '2px 2px 22px'}}/>
                        </div>
                        <div className="col-xs-6 col-xs-push-2">
                        <p style = {{fontFamily: 'Verdana', fontWeight: '700', fontSize: '27px', color: 'white'}}>Najlepsza cena: {
                            Math.min(product.price_allegro, product.price_ceneo, product.price_ebay) + ' PLN'
                        }</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '22px', color: 'silver'}}> Ocena klientów: {product.review}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '18px', fontWeight: 'bold'}}> Opis produktu: {product.name} - Najlepszy dostępny produkt na rynku. Innowacyjny i w ogóle super. </p>
                        </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}



export default Product
