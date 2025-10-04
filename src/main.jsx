import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RouterOutlined } from '@mui/icons-material'
import WenddingStore from './component/WenddingStore.jsx'
import SalwarKameez from './component/SalwarKameez.jsx'
import Men from './component/Men.jsx'
import Signup from './component/login_component/Signup.jsx'
import Login from './component/login_component/Login.jsx'
import AddtoCart from './component/addtocart.jsx'
import Forgotpassword from './component/login_component/password/Forgotpassword.jsx'
import Resetpassword from './component/login_component/password/Resetpassword.jsx'
import UserSetting from './component/login_component/UserSetting.jsx'
import Layout from './Layout.jsx'
// import { store } from './store/store.js'
// import { Provider } from 'react-redux'
import Detailpage from './component/Detailpage.jsx'
import { AuthProvider } from './component/login_component/AuthContext'
import User_Order from './component/login_component/User_Order.jsx'

let route = createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children: [
  {path:'/', element: <App/>},
  {path:'/weddingstore', element:<WenddingStore/>},
  {path:'/salwarkameez', element:<SalwarKameez/>},
  {path:'/men', element:<Men/>},
  {path:"/detailpage/:id", element:<Detailpage/>},
  {path:"/AddtoCart", element:<AddtoCart/>},
  {path:"/setting", element:<UserSetting/>},
  {path:"/Orders", element:<User_Order/>}
  ]},
  {path:"/login", element:<Login/>},
  {path:"/Signup", element:<Signup/>},
  {path:"/Forgotpassword", element:<Forgotpassword/>},
  {path:"/Resetpassword", element:<Resetpassword/>}
])

createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
)


