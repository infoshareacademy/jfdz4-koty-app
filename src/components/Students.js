import React from 'react'
import { Table } from 'react-bootstrap'

import FilterControls from './FilterControls'

const filters = {
  phrase: (product, searchPhrase) => [
    product.name,
  ].map(
    phrase => phrase.toLowerCase()
  ).some(
    phrase => phrase.includes(
      searchPhrase.toLowerCase()
    )
  )
  // city_gdansk: student => student.city === 'Gdańsk',
  // city_sopot: student => student.city === 'Sopot',
  // city_gdynia: student => student.city === 'Gdynia',
  // gender_male: student => student.gender === 'Male',
  // gender_female: student => student.gender === 'Female',
}

class Products extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: JSON.parse(localStorage.getItem('products')) || [],
      searchPhrase: '',
      activeFilterNames: [],
      filterByGdansk: false
    }

    this.handleSearchPhraseUpdate = event => this.setState({
      searchPhrase: event.target.value
    }, () => this.setState({
      activeFilterNames: this.state.activeFilterNames.filter(
        phrase => phrase !== 'phrase'
      ).concat(this.state.searchPhrase === '' ? [] : 'phrase')
    }))

    this.handleFilterUpdate = (filterName, enabled) => this.setState({
      activeFilterNames: this.state.activeFilterNames.filter(
        name => {
          const selectedFilterNamePrefix = filterName.split('_')[0]
          const currentFilterNamePrefix = name.split('_')[0]
          return selectedFilterNamePrefix !== currentFilterNamePrefix
        }
      ).concat(enabled === true ? filterName : [])
    })

    if (this.state.products.length === 0) {
      fetch(
        process.env.PUBLIC_URL + '/data/productsBase.json'
      ).then(
        response => response.json()
      ).then(
        products => this.setState({
          products: products
        }, () => {
          localStorage.setItem('products', JSON.stringify(this.state.products))
        })
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Produkty</h1>

        <FilterControls
          searchPhrase={this.state.searchPhrase}
          handleSearchPhraseUpdate={this.handleSearchPhraseUpdate}
          handleFilterUpdate={this.handleFilterUpdate}
          activeFilterNames={this.state.activeFilterNames}
        />

        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Zdjecie</th>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Ocena</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.products.filter(
              product => this.state.activeFilterNames.map(
                filterName => filters[filterName]
              ).every(
                func => func(product, this.state.searchPhrase)
              )
            ).map(
              product => (
                <tr key={product.id}>
                  <td style={{verticalAlign: 'middle'}}><img src={product.image}/></td>
                                                             <td style={{verticalAlign: 'middle'}}>{product.name}</td>
                                                            <td style={{verticalAlign: 'middle'}}>{product.price}</td>
                                                            <td style={{verticalAlign: 'middle'}}>{product.review}</td>
                                                         <td style={{verticalAlign: 'middle'}}>SZCZEGÓŁY</td>
                </tr>
              )
            )
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Products