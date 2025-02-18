import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from './Breadcrumb.module.css'
const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbState = useSelector(state => state.breadcrumb);

    return (
        <nav aria-label="breadcrumb" className="w-[90%]  m-auto py-5">
            <ol className={`${styles.breadcrumb}`}>
                <li className={styles['breadcrumb-item']}>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    let label = breadcrumbState[value] || value;


                    // Periksa jika rute saat ini adalah detail produk dan ubah label menjadi "Detail Product"
                    if (index === pathnames.length - 1
                        &&
                        value.match(/^\d+$/)
                        &&
                        breadcrumbState['detail']
                        &&
                        location.pathname.includes('/products/')
                    ) {
                        label = breadcrumbState['detail'];
                    }

                    return (
                        <li key={to} className={styles['breadcrumb-item']}>
                            <Link to={to}>{label}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav >
    );
};

export default Breadcrumb;