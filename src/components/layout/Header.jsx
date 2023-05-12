import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

const {token} = useSelector(store=> store.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

const handleClickChangeShowCart = ()=>{
  if(!token)return navigate("/login")
  dispatch(changeIsShowCart())
}

  return (
    <section>
      <Link to="/">
        <h1>gs-commerce</h1>
      </Link>

      <nav>
        <Link to="/login"><i className='bx bx-user'></i></Link>
        <Link to="/purchases"><i className='bx bx-box' ></i></Link>
        <button onClick={handleClickChangeShowCart}><i className='bx bx-cart' ></i></button>
      </nav>
    </section>
  )
}

export default Header
