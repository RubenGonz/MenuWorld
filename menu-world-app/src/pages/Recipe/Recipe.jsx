import './Style.scss';
import Burger from '../../assets/images/Burger.webp';
import Gluten from '../../assets/images/allergens/gluten.png';
import Eggs from '../../assets/images/allergens/eggs.png';
import Nuts from '../../assets/images/allergens/nuts.png';
import NoLike from '../../assets/images/NoLike.png';
import { Link } from 'react-router-dom';

function Recipe() {
  return (
    <>
      <main className='recipe'>
        <div className='content'>
          <section className='infoSection'>
            <img src={Burger} alt="recipe img" className='recipeImage' />
            <div className='recipeInfo'>
              <div className="recipeHeader">
                <div>
                  <h2 className='recipeName'>Recipe name</h2>
                  <Link to="/profile" className='recipeOwner'>Recipe owner</Link>
                </div>
                <div className='likes'>
                  <img src={NoLike} alt="" className='likeImage' />
                  <span className='likeImage'>0</span> <span>Likes</span>
                </div>
              </div>
              <p>Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview Recipe preview</p>
            </div>
          </section>
          <section className='ingredients'>
            <h3>Ingredients</h3>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
              <li>Ingredient 4</li>
              <li>Ingredient 5</li>
              <li>Ingredient 6</li>
              <li>Ingredient 6</li>
              <li>Ingredient 6</li>
              <li>Ingredient 6</li>
            </ul>
          </section>
          <section className='allergens'>
            <ul>
              <li><img src={Gluten} alt="gluteSimbol" className='allergenSimbol' /></li>
              <li><img src={Eggs} alt="eggsSimbol" className='allergenSimbol' /></li>
              <li><img src={Nuts} alt="nutsSimbol" className='allergenSimbol' /></li>
            </ul>
          </section>
          <section className='buttons'>
            <button>Edit recipe</button>
            <button>Delete recipe</button>
          </section>
          <hr />
          <section className='steps'>
            <div className='step'>
              <h3>Step 1</h3>
              <p>Step content Step content Step content Step content Step content Step content</p>
            </div>
            <div className='step'>
              <h3>Step 2</h3>
              <p>Step content Step content Step content Step content Step content Step content</p>
            </div>
            <div className='step'>
              <h3>Step 3</h3>
              <p>Step content Step content Step content Step content Step content Step content</p>
            </div>
            <div className='step'>
              <h3>Step 4</h3>
              <p>Step content Step content Step content Step content Step content Step content</p>
            </div>
          </section>
          <section className='finalState'>
            <h2 className='finalStateTitle'>Final State</h2>
            <img src={Burger} alt="recipe finalState img" className='recipeImage' />
          </section>
        </div>
      </main>
    </>
  );
}

export default Recipe;