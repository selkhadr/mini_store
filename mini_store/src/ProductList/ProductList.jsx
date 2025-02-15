import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductList()
{
    const [ProductList, setProductList] = useState([])

    const displayProduct = ()=>{
        return ProductList.map(product=>{
            return <Product product={product}/>
        })
    }

    const getProducts = ()=>{
        const products = fetch('https://fakestoreapi.com/products')
                                .then(response=>response.json())
                                .then(response=>console.log(response))
    
    }
    useEffect(()=>{
        getProducts();
        displayProduct();
    }, []);
    return (
    <div className="container-fluix mx-auto w-75 my-3">
        <h1>list des produits</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>price</th>
                    <th>description</th>
                    <th>category</th>
                    <th>image</th>
                    <th>rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>)
}