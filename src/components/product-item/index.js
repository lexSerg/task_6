import './index.css'
const ProductItem  = ({id, title, price, image}) => {
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
            </ul>
        </div>
    )
};
export default ProductItem