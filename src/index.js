import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import StarRating from './components/StarRating';

const Test= () => {
	const [movieRating , setMovieRating] = useState(0);
	return <div>
		<StarRating onSetRating={setMovieRating} maxRating={10} color='black'/>
		<p>Rated with {movieRating} starts</p>
	</div>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	
  <React.StrictMode>
    {/* <App /> */}
	
	<StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Cool', 'Amazing']} defaultRating={3}/>
	<StarRating size={24} color='red'maxRating={10} className='test'/>
	<Test />
  </React.StrictMode>
);

