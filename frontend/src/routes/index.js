import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ReturnPolicy from '../pages/ReturnPolicy'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Security from '../pages/Security'
import TermsOfUse from '../pages/TermsOfUse'
import SearchProduct from '../pages/SearchProduct'
import Order from '../pages/Order'
import CheckOut from '../pages/CheckOut'
import ThankYouPage from '../pages/ThankYou'
import AdminOrders from '../pages/AdminOrders'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "about-us",
                element : <AboutUs/>
            },
            {
                path : "orders",
                element : <Order/>
            },
            {
                path : "checkout",
                element : <CheckOut/>
            },
            {
                path : "contact-us",
                element : <ContactUs/>
            },
            {
                path : "return-policy",
                element : <ReturnPolicy/>
            },
            {
                path : "security",
                element : <Security/>
            },
            {
                path : "privacy-policy",
                element : <PrivacyPolicy/>
            },
            {
                path : "terms-of-use",
                element : <TermsOfUse/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path: "thankyou",
                element: <ThankYouPage/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },
                    {
                        path : "all-orders",
                        element : <AdminOrders/>
                    }
                ]
            },
        ]
    }
])


export default router