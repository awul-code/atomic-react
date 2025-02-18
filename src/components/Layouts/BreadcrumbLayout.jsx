
import Breadcrumb from '../Fragments/Breadcrumb/index';

const BreadcrumbLayout = ({ children }) => {
    return (
        <>
            <div>
                <Breadcrumb />
                <div>{children}</div>
            </div>
        </>
    )
}

export default BreadcrumbLayout