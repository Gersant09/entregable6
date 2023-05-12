import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const { token } = useSelector(store => store.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickChangeShowCart = () => {
    if (!token) return navigate("/login")
    dispatch(changeIsShowCart())
  }

  return (
    <section>
      <Link to="/">
        <h1 className='text-4xl text-red-500 font-bold p-4'>GS-commerce</h1>
      </Link>

      <div className='font-bold text-2xl flex justify-end p-5 '>
        <nav className=' border-[1px] '>
          <Link to="/login"><i className='bx bx-user border-[1px] hover:text-red-500'></i></Link>
          <Link to="/purchases"><i className='bx bx-box border-[1px] hover:text-red-500' ></i></Link>
          <button onClick={handleClickChangeShowCart}><i className='bx bx-cart border-[1px] hover:text-red-500' ></i></button>
        </nav>
      </div>

    </section>
  )
}

export default Header
