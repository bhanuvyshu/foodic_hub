import Axios from "axios";
import { useState} from "react";
import RecipeTile from "./RecipeTile";
import "./app.css";


function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState(["vegan"]);

  const YOUR_APP_ID = `82215410`;
  const YOUR_APP_KEY = "78178da8a1265f67381624a50746669f";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };
 

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
  

  return (
    <div className="app">
      <h1
        onClick={getRecipeInfo}
      >
        Foodie Hub🍔
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app_healthLable">
          <option
            onClick={() => {
              sethealthLabel("vegan");
            }}
          >
            vegan
          </option>
          <option
            onClick={() => {
              sethealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            onClick={() => {
              sethealthLabel("paleo");
            }}
          >
            paleo
          </option>
          <option
            onClick={() => {
              sethealthLabel("alcohol-free");
            }}
          >
            alcohol-free
          </option>
          <option
            onClick={() => {
              sethealthLabel("pork-free");
            }}
          >
            pork-free
          </option>
          <option
            onClick={() => {
              sethealthLabel("lupine-free");
            }}
          >
            lupine-free
          </option>
          <option
            onClick={() => {
              sethealthLabel("immuno-supportive");
            }}
          >
            immuno-supportive
          </option>
          <option
            onClick={() => {
              sethealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
