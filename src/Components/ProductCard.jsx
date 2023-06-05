import ProductImgOne from "../img/product/product-1.jpg"

const ProductCard = () => {
    return (
        <>
            <div className=" d-flex flex-column product-card">
                <div className="product-img position-relative">
                    <img src={ProductImgOne}></img>
                    <div className="moving-div position-absolute"></div>
               </div>
                <span className="mt-2">Buttons tweed blazer</span>
                <span>stars</span>
                <span>prise</span>
        </div>
        </>
    )
}

export default ProductCard;