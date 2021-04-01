import './index.css';
import { useSelector } from 'react-redux';
const Header = () => {
    const cart = useSelector(({cart}) => cart);
    return (
        <header>
            <p>Cart&nbsp;{cart.length.toString()}</p>
        </header>
    )
};
export default Header;