import { Product } from "../../services/productsService/products-response.interface";
import { getSearchProducts } from "../../services/productsService/productsService";
import Header from "./Header";
import { useState, useEffect } from 'react';
import SearchResults from "./SearchResult";

const HeaderAPI = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<Product[] | undefined>();

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSearch(searchQuery);
    };

    const handleSearch = (query: string) => {
        const newURL = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
        window.history.pushState(null, '', newURL);
        if (query) {
            getSearchProducts(query)
                .then((data) => {
                    setProducts(data);
                });
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('q') || '';
        if (query) {
            setSearchQuery(query);
            handleSearch(query);
        }
    }, []);

    return (
        <div>
            <Header
                searchQuery={searchQuery}
                onSearchInputChange={handleSearchInputChange}
                onSearchSubmit={handleSearchSubmit}
            />
            {products && <SearchResults products={products} />}
        </div>
    );
};

export default HeaderAPI;
