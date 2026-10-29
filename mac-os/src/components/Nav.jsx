import DateTime from './DateTime';
import './nav.scss';



const Nav = () => {
  return (
    <nav>

        <div className="left">
            <h4><i className="ri-apple-fill"></i></h4>
            <h4>Rohit Sharma</h4>
            <h4>File</h4>
            <h4>Window</h4>
            <h4>Terminal</h4>
        </div>
        <div className="right">
            <h4><i className="ri-battery-fill"></i></h4>
            <h4><img src="/navbar-icons/wifi.svg" alt="" /></h4>
            <DateTime />
        </div>
    </nav>
  )
}

export default Nav
