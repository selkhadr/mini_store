import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductList()
{
    const [productList, setProductList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [categories, setCategoryList] = useState([])

    const displayCategories = ()=>{
        return categories.map(category=>
            <button className="btn btn-secondary">
                {category}
            </button>
        )
    }

    const displayProduct = ()=>{
        const productsTemp = productList.filter(product=>{
            return product.title.includes(searchInput)
            || product.id.toString().includes(searchInput)
            || product.description.includes(searchInput)
        })
        if (productsTemp.length > 0)
        {
        return productsTemp.map((product, key)=>{
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
    const getCategories = ()=>{
        const products = fetch('https://fakestoreapi.com/products/categories')
                                .then(response=>response.json())
                                .then(response=>setCategoryList(response))
    
    }
    useEffect(()=>{
        getProducts();
        getCategories();
        //displayProduct();
    }, []);
    const handleSearch = (e)=>{
        e.preventDefault();
        const searchValue = document.querySelector('#search').value;
        setSearchInput(searchValue);
        //console.log(searchInput)
    }
    return (
    <div className="container-fluix mx-auto w-75 my-3">
        <h2>Search</h2>
        <form>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Search</label>
                </div>
                <div className="col-auto">
                    <input type="text" id='search' className="form-control"/>
                </div>
                <div className="col-auto">
                    <input className="btn btn-primary" type="submit" value='search' onClick={handleSearch}/>
                </div>
            </div>
            <h5>categories</h5>
            <div className="row g-3 align-items-center">
                <div className="btn-">
                    {displayCategories()}
                </div>
            </div>
        </form>
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