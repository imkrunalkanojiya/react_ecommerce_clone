import React from 'react'
import {Route,Switch} from 'react-router-dom'

//components
import Header from "./components/Header/index"
import Scrolltotopbtn from "./components/Scrolltotopbtn/index"

//pages
import Home from "./pages/home/index"
import Shop from "./pages/shop/index"
import Product from "./pages/product/index"
import Cart from "./pages/cart/index"
import Login from "./pages/login/index"
import Register from "./pages/register/index"
import Pagenotfound from "./components/404page/index"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/shop/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <Pagenotfound />
          </Route>
        </Switch>
      <Scrolltotopbtn />
    </>
  )
}



export default App