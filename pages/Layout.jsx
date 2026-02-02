import { Outlet, Link } from 'react-router';
import { FaHome, FaList, FaEdit, FaShieldAlt, FaInfo, FaShoppingCart } from 'react-icons/fa';

import { DateTimeDisplay } from "../components/CalendarIcon";
import { FaBagShopping } from 'react-icons/fa6';

// 功能選單
const menuItems = [
  {
    id: 'home',
    label: '首頁',
    icon: FaHome,
    path: '/home',
  },
  {
    id: 'about',
    label: '關於我們',
    icon: FaInfo,
    path: '/about',
  },
  {
    id: 'ProductList',
    label: '產品列表',
    icon: FaList,
    path: '/ProductList',
  },
  {
    id: 'Cart',
    label: '客戶購物車',
    icon: FaShoppingCart,
    path: '/Cart',
  },
  {
    id: 'Orders',
    label: '客戶訂單結帳',
    icon: FaBagShopping,
    path: '/Orders',
  },
  {
    id: 'ProductEdit',
    label: '產品編輯',
    icon: FaEdit,
    path: '/ProductEdit',
  },
];

const Layout = () => {
  return (
    <>
      {/* 主內容區塊 */}
      <main
        className="container-fluid min-vh-100 d-flex flex-column px-4 px-md-5"
        style={{ marginTop: '15px', maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {/* 導覽列：桌機橫向、行動裝置漢堡選單 */}
        <nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
          <div className="container-fluid">
            <Link
              to="/home"
              className="navbar-brand d-flex align-items-center py-0"
            >
              <FaShieldAlt className="me-2 text-primary" size={24} />
              <div>
                <div className="fw-bold">花的世界</div>
                <small className="text-muted">商品管理系統</small>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMain"
              aria-controls="navbarMain"
              aria-expanded="false"
              aria-label="切換選單"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav flex-grow-1 justify-content-center flex-wrap gap-1 gap-md-0">
                {menuItems.map((item, index) => (
                  <li key={item.id} className="nav-item d-flex align-items-center">
                    <Link
                      to={item.path}
                      className="nav-link d-flex align-items-center text-dark"
                    >
                      <item.icon className="me-2 text-warning" size={24} />
                      {item.label}
                    </Link>
                    {index < menuItems.length - 1 && (
                      <span className="d-none d-md-inline text-muted mx-2">|</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="d-flex align-items-center">
                <DateTimeDisplay showCalendarIcon={true} className="me-2" />
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </main>
      {/* 頁尾區塊 */}
      <footer className="bg-dark text-center text-lg-start mt-auto">
        <div className="text-center p-3">
          <small className="text-white">Copyright &copy; Wilson 威爾森 2026 | </small>
          <small className="text-white">All rights reserved | </small>
          <small className="text-white">服務信箱: <a href="mailto:wilson.tzo@gmail.com" className="text-white">wilson.tzo@gmail.com</a></small>
        </div>
      </footer>
    </>
  )
}

export default Layout;