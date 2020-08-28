import React from 'react';

import './CreatePost.css';

const CreatePost = () => {
	return (
		<div className="createPost" >
			<form>
				<div className="marg-btm">
					<h4 className="createPost__title">Create Post</h4>
				</div>
				<div className="marg-btm">
					<input type="text"
						placeholder="Description"
						className="createPost__input"	/>
				</div>
				<div className="marg-btm">
					<label>Upload Image</label>
					<input type="file"  />
				</div>
				<div>
					<button className="createPost__submit">Submit Post</button>
				</div>
			</form>
		</div>
	);
}

export default CreatePost;