import '../sass-styles/variables.scss'
import '../sass-styles/header.style.scss'

export function Header() {
    return (
        <header>
            <h1 className='logo'>
                e<span>b</span><span>a</span><span>y</span>
            </h1>

            <form className='search' action="#">
                <select name="Categories" id="categories">
                    <option value="all">All Categories</option>
                </select>
                <input type="search" name='Search' id='search' placeholder='Search for items...' />
                <button className='accent-stl'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            <div className="wishlist">
                <div>
                    <i className="fa-regular fa-heart"></i>
                    <div className='accent-stl'>4</div>
                </div>
                Wishlist
            </div>

            <div className="my__cart">
                <div>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div className='accent-stl'>1</div>
                </div>
                <div>
                    <p>My cart</p>
                    <small>$21</small>
                </div>
            </div>

            <div className="user">
                <img src="https://img.freepik.com/free-photo/face-expressions-illustrations-emotions-feelings_53876-125619.jpg?t=st=1715731129~exp=1715734729~hmac=8d8c050609cfcfc32706fe936ee3dbe9510b9edb4758daed5b213c7efbcb5429&w=1800" alt="User photo" />
                <select name="User" id="user">
                    <option value="me"></option>
                </select>
            </div>

            <button className="all-categories accent-stl">
                <i className="fa-solid fa-qrcode"></i>
                <p>Brows All Categories</p>
            </button>

        </header>
    )
}