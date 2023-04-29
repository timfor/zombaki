import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { ConnectButton } from '@suiet/wallet-kit';
import '../App.css';
import logo from '../images/logo.png'
import outlawer1 from '../images/outlawer1.png'
import outlawer2 from '../images/outlawer2.png'

const Layout = () => {
	return (
		<>

			<header>
				<div className='hf-cont'>
					<div className='hf-cont-elem'>
						<img id='logo_sui_outlaws' src={logo} alt="no logo" />
						<img id='logo_sui_outlaws' src={outlawer1} alt="no logo" />
						<img id='logo_sui_outlaws1' src={outlawer2} alt="no logo" />


					</div>




					<div className='hf-cont-elem' id='n2'>
						<NavLink to='/'><h1>About</h1></NavLink>
						<NavLink to='/mint'><h1>Mint</h1></NavLink>
						<NavLink to='/subcribe'><h1>Subcribe</h1></NavLink>
					</div>
					<div className='hf-cont-elem'>
						<ConnectButton>Connect</ConnectButton>

					</div>

				</div>

			</header>
			<main>
				<Outlet />

			</main>

			<footer>
				1
			</footer>


		</>
	);
}

export default Layout;
