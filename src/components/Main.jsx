import React from 'react';

import '../styles/mainpage.css'
import image from '../images/outlawer1.png'


const Main = () => {



	return (
		<>
			<div className='container-main'>
				<h1>O</h1>
				<h1>U</h1>
				<h1>T</h1>
				<h1>L</h1>
				<h1>A</h1>
				<h1>W</h1>
				<h1>S</h1>
				<div class='foo'>
					<p>Текст</p>
					<img src={image} className="hidden-img" alt="Тест" />
				</div>
			</div>
		</>
	);
}

export default Main;
