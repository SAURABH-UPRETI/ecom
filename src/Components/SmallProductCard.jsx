import Img1 from "../img/shop/shop-1.jpg"

const SmallProductCard = () => {
    return (
        <>
            <div className="d-flex flex-row small-product-card mt-3">
                <img src={Img1}></img>
                <div className="d-flex flex-column justify-content-center container-fluid ">
                    <span>Chain bucket bag</span>
                    <span>stars</span>
                    <span>price</span>
                </div>
            </div>
        </>
    )
}
export default SmallProductCard