import React, { useState, useEffect } from 'react';

import '../styles/carousel.css';

import slides from '../data/slides.js';

const Carousel = () => {
	const [activeSlide, setActiveSlide] = useState(slides[0]);

	const slideHandler = (e) => {
		dotsCleaner(parseInt(e.target.id));
		//e.target.classList.add('dot--fill');
		setActiveSlide(slides[parseInt(e.target.id - 1)]);
	};

	const prevHandler = (e) => {
		if (activeSlide.id === '0') {
			return;
		} else {
			const selectedIndex = parseInt(activeSlide.id) - 1;

			const childNumber = parseInt(activeSlide.id);
			dotsCleaner(childNumber);
			setActiveSlide(slides[selectedIndex]);
		}
	};
	const nextHandler = (e) => {
		if (activeSlide.id === '3') {
			return;
		} else {
			const selectedIndex = parseInt(activeSlide.id) + 1;

			const childNumber = parseInt(activeSlide.id) + 2;
			dotsCleaner(childNumber);

			setActiveSlide(slides[selectedIndex]);
		}
	};

	// utility functions

	const dotsCleaner = (childNumber) => {
		console.log(childNumber);

		const dots = document.querySelectorAll('.dot');

		console.log(dots);
		dots.forEach((dot, index) => {
			dot.classList.remove('dot--fill');
		});

		const dot = document.querySelector(`.dot:nth-child(${childNumber})`);
		console.log(dot);

		dot?.classList.add('dot--fill');
	};

	return (
		<>
			<div className='carousel'>
				<img
					key={activeSlide.id}
					src={activeSlide.img}
					alt='Basit Ali'
					width='200'
					height='200'
				/>
				<blockquote className='testimonial' key={`body` + activeSlide.id}>
					<div className='testimonial-body'>
						<p>{activeSlide.testimonialBody}</p>
					</div>
					<div className='testimonial-info'>
						<div className='testimonial-author'>
							<p>{activeSlide.testimonialAuthor}</p>
						</div>
						<div className='testimonial-date'>
							<p>{activeSlide.testimonialDate}</p>
						</div>
					</div>
				</blockquote>

				<div className='controls'>
					<button className='btn btn-left' onClick={prevHandler}>
						<i className='fa-solid fa-angle-left'></i>
					</button>
					<button className='btn btn-right' onClick={nextHandler}>
						<i className='fa-solid fa-angle-right'></i>
					</button>
				</div>
				<div className='dots'>
					<div className='dot dot--fill' onClick={slideHandler} id='1'>
						&nbsp;
					</div>
					<div className='dot' onClick={slideHandler} id='2'>
						&nbsp;
					</div>
					<div className='dot' onClick={slideHandler} id='3'>
						&nbsp;
					</div>
					<div className='dot' onClick={slideHandler} id='4'>
						&nbsp;
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
