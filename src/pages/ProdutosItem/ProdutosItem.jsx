import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContainer, ProductDetails } from "./styled";

export const ProdutoItem = ({ title, description, image }) => {
    const [isHovered, setIsHorvered] = useState(false);

    return (
        <ProductContainer
            onMouseEnter={() => setIsHorvered(true)}
            onMouseLeave={() => setIsHorvered(false)}
        >
            <img src={image} alt={title} />
            {isHovered && (
                <ProductDetails>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <FaShoppingCart size={20} />
                </ProductDetails>
            )}
        </ProductContainer>
    )
}