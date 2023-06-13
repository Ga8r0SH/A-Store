const Homepage = () => {
    return (
        <section className="py-16 flex justify-center items-center h-screen">
            <div className="container max-w-[1200px] mx-auto my-0 ">
                <div className="wrapper mx-[30px] text-center">
                    <h1 className="text-4xl font-bold mb-8">Добро пожаловать в наш интернет-магазин</h1>
                    <p className="text-lg text-gray-700 mb-8">Мы предлагаем широкий выбор продуктов высокого качества по
                        доступным ценам.</p>
                    <a href="/products" className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">Посмотреть
                        каталог</a>
                </div>
            </div>
        </section>
    )
}

export default Homepage;