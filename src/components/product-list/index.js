import {useEffect} from 'react';
import './index.css';
import {useDispatch, useSelector} from 'react-redux';
import { onProductsLoad } from '../../actions';
import ProductItem from '../product-item';
import Loader from '../Loader'
const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => products || []);
    const cart = useSelector(({cart}) => cart);
    const fetchProduct = async () => {
        const productsData = await fetch('https://fakestoreapi.com/products').then(value => value.json());
        dispatch(onProductsLoad((productsData)));
    }
    useEffect(()=>{
     fetchProduct();
    }, [])
    return (
        <div className='product-list'>
            <h3 className='products_list_title'>Products</h3>
            {!products.length > 0 && <Loader/>}
            {products.map(product => {
               return <ProductItem 
                        key={product.id} 
                        isProductInCart={!!cart.find(el => el.id === product.id)} 
                        product={product}>
                      </ProductItem>
            })}
        </div>
    )
};
export default ProductList;