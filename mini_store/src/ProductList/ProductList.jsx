import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductList()
{
    const [ProductList, setProductList] = useState([])

    const displayProduct = ()=>{
        if (ProductList.length > 0)
        {
        return ProductList.map((product, key)=>{
            return <Product product={product} key={key}/>
        })}
        return <tr>
            <td colSpan={7}>no items </td>
        </tr>
    }

    const getProducts = ()=>{
        const products = fetch('https://fakestoreapi.com/products')
                                .then(response=>response.json())
                                .then(response=>setProductList(response))
    
    }
    useEffect(()=>{
        getProducts();
        //displayProduct();
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
             {displayProduct()}
            </tbody>
        </table>
    </div>)
}