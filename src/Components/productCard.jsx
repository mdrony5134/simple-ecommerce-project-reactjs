 // eslint-disable-next-line react/prop-types
 const ProductCard = ({img, header, title, price}) => {
    return (
            <div className="product-card">
                <img src={img}/>
                <h2>{header}</h2>
                <p>{title}</p>
                <span>{price}</span>
            </div>
    );
};

export default ProductCard;