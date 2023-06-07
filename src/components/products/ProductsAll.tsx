const Products = () => {
    return (
        <div className="Products">
            <div className="container max-w-[1200px] mx-auto my-0">
                <div className="wrapper__products flex mx-[30px] items-center my-20">
                    <div className="product-block border p-5 rounded">
                        <h2 className="product-title">Название товара</h2>
                        <span className="product-price">Цена: 100 руб.</span>
                        <p className="product-description">Описание товара...</p>
                        <span className="product-brand">Бренд: XYZ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;