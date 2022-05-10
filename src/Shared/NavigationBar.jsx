import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavigationBar.css'
import { Button, Dropdown, Menu } from 'antd'

const NavigationBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>YOURIT</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <Dropdown overlay={menu}>
                    <Link to='/'>Services</Link>
                </Dropdown>
                <li>
                    <Link to='/training'>Industries</Link>
                </li>
                <Dropdown overlay={menu}>
                    <Link to='/'>About</Link>
                </Dropdown>
                <li>
                    <Link to='/contact'>Blogs</Link>
                </li>
                <Dropdown overlay={menu}>
                    <Link to='/'>Services</Link>
                </Dropdown>
            </ul>
        </div>
    )
}

export default NavigationBar