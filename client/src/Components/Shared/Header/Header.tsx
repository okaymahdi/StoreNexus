import { FaRegHeart } from 'react-icons/fa6'
import { GoGitCompare } from 'react-icons/go'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router'
import { Search } from '../../Home/Search/Search'
import { BadgeCart } from '../Badge/BadgeCart/BadgeCart'

export const Header = () => {
  return (
    <header>
      {/* Top Strip */}
      <div className="top-strip py-2 border-t border-b border-border">
        <div className="container w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="col1 w-1/2">
              <p className="text-sm text-secondary font-playfair font-medium">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex justify-end items-center">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to={'/help-center'}
                    className="text-sm text-secondary font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={'/order-tracking'}
                    className="text-sm text-secondary font-medium transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Strip */}
      <div className="middle-strip py-5">
        <div className="container w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="col1 w-1/4">
              <Link to={'/'}>
                <img src="./images/logo.jpg" alt="" />
              </Link>
            </div>
            <div className="col2 w-[45%]">
              <Search />
            </div>
            <div className="col3 w-1/3">
              <ul className="flex items-center justify-end gap-4 w-full">
                <li className="list-none text-sm font-medium ">
                  <Link to={'/login'}>Login</Link> / &nbsp;{' '}
                  <Link to={'/register'}>Register</Link>
                </li>
                <li className="">|</li>
                <li>
                  <BadgeCart title="Compare">
                    <GoGitCompare />
                  </BadgeCart>
                </li>
                <li>
                  <BadgeCart title="Wishlist">
                    <FaRegHeart />
                  </BadgeCart>
                </li>
                <li>
                  <BadgeCart title="Your Shop">
                    <MdOutlineShoppingCart />
                  </BadgeCart>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bottom-strip"></div>
    </header>
  )
}
