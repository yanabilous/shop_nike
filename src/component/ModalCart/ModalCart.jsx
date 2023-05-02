import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {PatternFormat} from "react-number-format";
import "./modalCart.scss";
import {validationSchema} from "../../validation/validationSchema";
import {removeProduct} from "../../redux/thunks/removeProductCart.js";


export default function ModalCart({handlerActiveModalCart}) {
    const dispatch = useDispatch();
    const isActiveModalCart = useSelector(state => state.modalActiveReducer.isActiveModalCart);
    const products = useSelector(state => state.products.products);
    const cartProduct = useSelector(state => state.cartProductReducer.cartProduct);


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            phone: "",

        },
        onSubmit: values => {
            const cartProductArr = Object.entries(cartProduct);
            cartProductArr.map(([prod]) => {
                products.map(product => prod === product.id && console.log(product));
            });
            console.log(values);
            // localStorage.removeItem("cartProduct");
        },
        validationSchema: validationSchema,
    });

    // console.log(firstName);
    return (
        <div className={isActiveModalCart ? "modal active" : "modal"} onClick={handlerActiveModalCart}>
            <form
                className="modal__content form-container"
                onClick={(e) => e.stopPropagation()}
                onSubmit={formik.handleSubmit}
            >
                <div className="modal__header header-modal-cart">
                    <h3>Information</h3>
                    <h3 className="modal__header-close-btn" onClick={handlerActiveModalCart}>x</h3>
                </div>
                <label>Name</label>
                <input
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                ) : null}

                <label>Last Name</label>
                <input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error">{formik.errors.lastName}</div>
                ) : null}

                <label>Age</label>
                <input
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.age && formik.errors.age ? (
                    <div className="error">{formik.errors.age}</div>
                ) : null}

                <label>Address</label>
                <input
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address ? (
                    <div className="error">{formik.errors.address}</div>
                ) : null}

                <label>Phone</label>

                <PatternFormat
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    format="(###) #### ###"
                    allowEmptyFormatting
                    mask="_"/>

                {formik.touched.phone && formik.errors.phone ? (
                    <div className="error">{formik.errors.phone}</div>
                ) : null}

                <button
                    type="submit"
                    // onClick={() => formik.errors && handlerActiveModalCart}
                  onClick={() => dispatch(removeProduct(cartProduct))}
                >
                    Сheckout
                </button>
            </form>
        </div>
    );
}
