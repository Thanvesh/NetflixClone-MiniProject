import {Component} from 'react'
import {Link} from 'react-router-dom'

import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'

class NavBar extends Component {
  state = {fullMenu: false, searchValue: ''}

  menuShow = () => {
    this.setState({fullMenu: true})
  }

  menuHide = () => {
    this.setState({fullMenu: false})
  }

  getSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onSearch = () => {
    const {getSearchMoviesData} = this.props
    const {searchValue} = this.state
    if (searchValue !== '') {
      getSearchMoviesData(searchValue)
      this.setState({searchValue: ''})
    }
  }

  render() {
    const {fullMenu, searchValue} = this.state
    const {searchRoute, isHome, isPopular, isAccount} = this.props
    const searchContainer = searchRoute
      ? 'search-input-route-container search-input-container'
      : 'search-input-container'
    const searchBtn = searchRoute
      ? 'search-route-btn search-button'
      : 'search-button'
    const searchIcon = searchRoute ? 'icons search-route-icon' : 'icons'

    const homeRoute = isHome ? 'menu-items highlight' : 'menu-items'
    const popularRoute = isPopular ? 'menu-items highlight' : 'menu-items'
    const accountRoute = isAccount ? 'menu-items highlight' : 'menu-items'

    return (
      <nav className="nav-bar">
        <Link to="/" className="img-link">
          <img
            className="header-web-site"
            alt="website logo"
            src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660479354/Group_7399_nn7x3u.png"
          />
        </Link>
        {/* <div className="header"> */}
        <ul className="show-menu show1">
          <li>
            <Link to="/" className={homeRoute}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/popular" className={popularRoute}>
              Popular
            </Link>
          </li>
        </ul>
        <div className="icons-container">
          <div className={searchContainer}>
            {searchRoute && (
              <input
                value={searchValue}
                onChange={this.getSearchInput}
                placeholder="Search"
                type="search"
                className="search-input"
              />
            )}
            <Link to="/search">
              <button
                onClick={this.onSearch}
                testid="searchButton"
                type="button"
                className={searchBtn}
              >
                <HiOutlineSearch className={searchIcon} />
              </button>
            </Link>
          </div>
          <Link to="/account">
            <img
              className="avatar show1"
              alt="profile"
              src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660573232/Avatar_giy0y5.png"
            />
          </Link>
          <button
            onClick={this.menuShow}
            type="button"
            className="show close-btn"
          >
            <MdMenuOpen className="hamburger icons" />
          </button>
        </div>
        {/* </div> */}

        {fullMenu && (
          <nav className="show">
            <ul className="show-menu">
              <li>
                <Link to="/" className={homeRoute}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/popular" className={popularRoute}>
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/account" className={accountRoute}>
                  Account
                </Link>
              </li>
              <li>
                <button
                  onClick={this.menuHide}
                  className="close-btn"
                  type="button"
                >
                  <AiFillCloseCircle className="close icons" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    )
  }
}

export default NavBar
