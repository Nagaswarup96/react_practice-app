import Product from './Product'
import React, { Component } from 'react'
import Tile from './Tile';
import { ProductConsumer } from '../Context';

export default class ProductList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Tile name="our" title="products" />
                        <div className="row" >
                            <ProductConsumer>
                                {
                                    (value) => {
                                        return value.products.map((product) => {
                                            return <Product key={product.id} product={product} />
                                        });
                                    }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


