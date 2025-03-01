import { useEffect, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct/index';
import SearchInputProduct from '../components/Elements/SearchInput';
import { getProducts, searchProducts } from '../services/product.service';
import useDebounce from '../Hooks/useDebounce';
import TableCart from '../components/Fragments/TableCart/index';
import Navbar from '../components/Layouts/Navbar';
import Cart from '../components/Elements/Cart/index';
import { useDispatch } from 'react-redux';
import { setBreadcrumb } from '../redux/slices/breadcrumbSlice';
import Breadcrumb from '../components/Fragments/Breadcrumb';
import { useLogin } from '../Hooks/useLogin';

const ProductPage = () => {
    const debounce = useDebounce()
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [products, setProducts] = useState([])
    const DELAY = 500
    const dispatch = useDispatch()
    const username = useLogin()


    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])


    const handleSearch = () => {
        if (query !== '') {
            searchProducts(query, (data) => {
                setResults(data);
            });
        } else {
            getProducts((data) => {
                setResults(data)
            })
        }
    };

    const debouncedHandleSearch = debounce(handleSearch, DELAY);


    useEffect(() => {
        debouncedHandleSearch();
    }, [query]);


    useEffect(() => {
        dispatch(setBreadcrumb({ products: 'Products' }));
    }, [dispatch]);

    return <>
        <Navbar />
        <Breadcrumb />
        <div className='w-[90%] m-auto'>
            <div className="w-[40%] mt-8 m-auto">
                <SearchInputProduct onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="flex py-5 mt-8  w-full  col-end-9 ">

                <div className='flex flex-wrap flex-1 basis-9/12 gap-y5 justify-around gap-y-10'>
                    {results.length > 0 &&
                        results.map((product) => {
                            return (
                                <CardProduct key={product.id}>
                                    <CardProduct.Header image={product.image} id={product.id} />
                                    <CardProduct.Body name={product.title}>
                                        {product.description}
                                    </CardProduct.Body>

                                    <CardProduct.Footer
                                        price={(product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        id={product.id}
                                    />
                                </CardProduct>
                            )
                        })
                    }
                </div >

                <div className=' flex-1 w-fulll basis-3/12  p-4 bg-slate-100 rounded shadow h-1/2'>
                    <Cart />
                    <div className='w-full '>
                        <ul>
                            <TableCart products={products} />
                        </ul >
                    </div >

                </div >
            </div >
        </div>

    </>
}

export default ProductPage