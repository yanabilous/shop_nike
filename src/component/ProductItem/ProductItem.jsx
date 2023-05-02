import {useEffect, useState} from "react";
import {Button} from "../Button/Button";
import {ColorProduct} from "../ColorProduct/ColorProduct";
import {FaStar} from "react-icons/fa";
import "./productItem.scss";
import {addToFavorite} from "../../redux/thunks/addToFavorite";
import {useDispatch, useSelector} from "react-redux";
import {removeFavorite} from "../../redux/thunks/removeFavorite";


export const ProductItem = (props) => {
    const prodFavorite = useSelector(state => state.prodFavoriteReducer.prodFavorite);
    const dispatch = useDispatch();
    const {product, color, showModalList, addProductToCartCheck} = props;
    const [activeFavorite, setActiveFavorite] = useState(false);


    useEffect(() => {
        let activeStar = JSON.parse(localStorage.getItem("prodFavorite")) == null ? [] : JSON.parse(localStorage.getItem("prodFavorite"));
        activeStar.filter(el => {
            return el.id === product.id && setActiveFavorite(true);
        });
    }, [product.id]);

    const activeStar = () => {
        if (activeFavorite) {
            setActiveFavorite(false);
            dispatch(removeFavorite(product, prodFavorite));
        } else {
            setActiveFavorite(true);
        }
    };

    return (
        <div className="product-item">

            <div className="flex-star" onClick={() => {
                dispatch(addToFavorite(product));
                activeStar();
            }}>
                <FaStar className={activeFavorite ? "star-active" : "favorite"}/>

            </div>
            <img src={product.img_url} alt={product.name}/>

            <h4>{product.name}</h4>



            <div>
                <ul className="color-list">
                    {color.map((item) => <ColorProduct key={item} bg={{backgroundColor: item}}/>)}
                </ul>
            </div>


            <div className="product-item-footer flex">
                <h3>$: {product.price}</h3>

                <Button
                    text="ADD TO CART"
                    productBtn={product.id}

                    onClick={() => {
                        console.log((typeof addProductToCartCheck));
                        showModalList(true);
                        addProductToCartCheck(product.id);
                    }}/>
            </div>
        </div>
    );
};

