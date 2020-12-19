import React, {Component} from 'react';
import CounterClass from './counters/class';
import ButtonDelete from './counters/buttonDel';

export default class extends Component {
    
    state = {
        products: getProducts()
    }


    changeCnt(i, cnt) {
        // this.state.products[i].count = cnt
        let newProducts = [...this.state.products];   // создаем новый массив newProds - это копия массива prods
        let newProduct = {...newProducts[i]};        // создаем копии объектов из массива prods
        newProduct.count = cnt;                      // в новосозданные объекты по ключу count кладем полученные от дочернего элемента значение cnt 
        newProducts[i] = newProduct;                // в массив newProds кладем уже измененные объекты newProd
        this.setState({products: newProducts});     // запускаем функцию изменения state - setState() для изменения состояния
    }

    deleteProd(i) {
        let products = [...this.state.products];
        products.splice(i, 1);
        this.setState({products});
    }

    render() {
        let productsList = this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <CounterClass min={1} 
                                      max={product.rest} 
                                      cnt={product.count}
                                      onChange={(cnt) => this.changeCnt(i, cnt)}           
                        />
                    </td>
                    <td>{product.price * product.count}</td>
                    <td><ButtonDelete onDelete={() => this.deleteProd(i)}/></td>
                </tr>
                
            );
        });

        let totalSum = this.state.products.reduce((sum, product) => {
            return (sum + (product.price * product.count));
        }, 0);

        return (
            <div style={{fontSize: 20 +'px'}}>
                <h2>Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <td> Title </td>
                            <td> Price </td>
                            <td> Count </td>
                            <td> Total </td>
                            <td> Actions </td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList}
                    </tbody>
                </table>
                <div>Total: <span>{totalSum}</span></div>
            </div>
        );
    }
    
}

function getProducts() {
    return [
        {
            id: 100,
            title: 'iPhone 12',
            price: 30000,
            rest: 10,
            count: 1
        },
        {
            id: 101,
            title: 'Samsung A340',
            price: 12000,
            rest: 9,
            count: 1
        },
        {
            id: 102,
            title: 'Oppo X2',
            price: 45000,
            rest: 6,
            count: 1
        },
        {
            id: 103,
            title: 'OnePlus 8',
            price: 21000,
            rest: 10,
            count: 1
        }
    ]
}


