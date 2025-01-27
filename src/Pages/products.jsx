import CardProduct from '../components/Fragments/CardProduct/index';
const ProductPage = () => {
    return <>
        <div className="flex justify-center py-5">
            <CardProduct >
                <CardProduct.Header image="/images/soes.png" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt soluta illo sunt eaque aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam earum, doloremque velit
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>
            <CardProduct >
                <CardProduct.Header image="/images/soes.png" />
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt soluta illo sunt eaque aut.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>
        </div>
    </>
}

export default ProductPage