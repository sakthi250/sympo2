


import './index.css'


const Header = () => (
    <nav className="nav-header">
      <div className='nav-content'>
          
      <img
        className="website-logo"
        src="logo.png"
        alt="website logo"
      />

        <ul className="nav-menu">
        <li className='nav-link'> 
            Home 
        </li>
        <li className='nav-link'> 
           Events
        </li>
        <li className='nav-link'> 
           Contact Us
        </li>
        <li className='nav-link'> 
           About Us
        </li>
        </ul>
      </div>
    </nav>
  )
  export default Header