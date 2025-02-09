

const SearchInputProduct = ({ onChange }) => {
    return (
        <>
            <input
                onChange={onChange}
                type="text"
                placeholder="Search"
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </>
    )
}

export default SearchInputProduct