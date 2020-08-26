import React from 'react';
import fakeData from '../../fakeData'
const Shop = () => {
    const [product, setProduct] = useState(first10);
    const first10 = fakeData.slice(0, 10);
    return (
        <div>
            <h1>This is shop</h1>
        </div>
    );
};

export default Shop;