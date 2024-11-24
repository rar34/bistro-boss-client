import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><a>Contact Us</a></li>
        {/* <li><Link to='/dashboard/cart'>Dashboard</Link></li> */}
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
    </>

    return (
        <>
            <div className="navbar fixed z-50 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                        <GiHamburgerMenu />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn flex btn-ghost text-xl"><img src={logo} height={50} width={50} alt="" /> <p>Bistro Boss <br /> <p className="text-base">Restaurant</p></p></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/dashboard/cart">
                        <button className="btn btn-outline btn-secondary flex items-center">
                            <FaShoppingCart className="mr-2 text-2xl" />
                            <div className="badge badge-secondary">1</div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;