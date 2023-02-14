
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='container flex flex-wrap items-center justify-between mx-auto mt-5'>

            <div><div>Logo</div></div>

            <div className='hidden w-full md:block md:w-auto '>
                <ul className='manrope-font font-medium text-base text-gray-500 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Categories</li>
                    <li>Brands</li>
                </ul>
            </div>

            <div>Cart</div>

        </div>
    )
}

export default Navigation