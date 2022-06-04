import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import RecipeTile from './components/RecipeTile';
import { useSpring, animated } from 'react-spring';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const APP_KEY = 'bc05d1aa7c3f74df944bfca366c340f1';
  const APP_ID = '9ce3f1a6';

  var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`;

  const getRecipes = async () => {
    const response = await axios.get(url);
    setRecipes(response.data.hits);
    console.log(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
    setQuery('');
  };

  const style1 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 1000,
  });

  const style2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <div className="App">
      <animated.h1 style={style2} className="title">
        Food Recipes Database
      </animated.h1>
      <animated.form className="form" style={style1} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an ingredient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-box"
        />
        <input type="submit" value="Search" className="submit-btn" />
      </animated.form>

      <div className="recipes-grid">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
