import React from 'react'

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

            <div>
                {product === undefined ? <div> Fetching</div> :
                    <div>
                        <h1> {product.name} </h1>
                        <img src={product.image}/>
                        <p>Cena: {product.price}</p>
                        <p> Ocena klientów: {product.review}</p>
                        <p> OPIS: Super najlepsza rzecz na świecie! </p>
                    </div>
                }
            </div>
        )
    }
}



export default Product
