import './index.css';
import {useDispatch} from 'react-redux';
import {onItemInCart} from '../../actions';
const ProductItem  = ({product, isProductInCart}) => {
    const {id, title, price, image} = product;
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(onItemInCart(item));
    }
    return (
        <div className='product-item'>
            <ul>
                <li className='product-id'><p>{id}</p></li>
                <li className='product-img'><img src={image} alt={title}></img></li>
                <li className='product-title'>
                    <p>Title: </p>
                    <p>{title}</p>
                </li>
                <li>Price: {price}</li>
                <button onClick={()=> addToCart(product)}>
                    {isProductInCart ? 'Remove item from cart' : 'Add item to cart'}
                </button>
            </ul>
        </div>
    )
};
export default ProductItem