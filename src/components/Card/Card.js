import React from 'react';

import './Card.css';

const Card = props => {
	return (
		<div className="card">
			<div className="card__title marg-btm">
				<h3>Mahendra Singh Dhoni</h3>
			</div>
			<div className="marg-btm">
				<img src="https://c4.wallpaperflare.com/wallpaper/264/83/722/ms-dhoni-wallpaper-preview.jpg" 
					 className="card__img"
					 alt="post"	/>
			</div>
			<div className="card__content marg-btm">
			   <div className="card__likesIcon">
					<span><i className="material-icons-outlined">thumb_up_alt</i></span>
					<span className="card__likesCount">50K</span>
			   </div>
				<h6>21/03/99</h6>
				<p>Magnifient Six in the crowd !!Lets the party starting in the dressing room</p>
				<input 
					className="card__comment"
					placeholder="Add comments" />
			</div>
		</div>
	);
}

export default Card;