import CategoryImgOne from "../img/categories/category-1.jpg"
import CategoryImgTwo from "../img/categories/category-2.jpg"
import CategoryImgThree from "../img/categories/category-3.jpg"
import CategoryImgFour from "../img/categories/category-4.jpg"
import CategoryImgFive from "../img/categories/category-5.jpg"

const Home = () => {
    return (
        <>
            <div className="d-flex container-fluid border flex-row section-one">
                <div className="d-flex part-one w-50 p-2">
                    <img src={CategoryImgOne}></img>
                </div>
                <div className="d-flex flex-row w-50 part-two">
                    <div className="w-50 p-2" data-setbg="./">
                    <img src={CategoryImgTwo}></img>
                    </div>
                    <div className="w-50 p-2">
                    <img src={CategoryImgThree}></img>
                    </div>
                    <div className="w-50 p-2">
                    <img src={CategoryImgFour}></img>
                    </div>
                    <div className="w-50 p-2">
                    <img src={CategoryImgFive}></img>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Home;