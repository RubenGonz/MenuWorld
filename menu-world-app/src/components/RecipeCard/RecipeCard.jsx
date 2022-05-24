import './Style.scss';
import Burger from '../../assets/images/Burger.webp';
import Gluten from '../../assets/images/allergens/gluten.png';
import Eggs from '../../assets/images/allergens/eggs.png';
import Nuts from '../../assets/images/allergens/nuts.png';
import NoLike from '../../assets/images/NoLike.png';
import { Link } from 'react-router-dom';

function RecipeCard() {
  return (
    <Link to="/profile/recipe" className='recipeCard'>
      <div className='recipeHeader'>
        <div>
          <h2 className='recipeName'>Recipe name</h2>
          <Link to="/profile" className='recipeOwner'>Recipe owner</Link>
        </div>
        <div className='likes'>
          <img src={NoLike} alt="" className='likeImage' />
          <span className='likeImage'>0</span> <span>Likes</span>
        </div>
      </div>
      <div className='recipeInfo'>
        <img src={Burger} alt="" className='recipeImage' />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, ullam nulla. Debitis nesciunt autem maxime deserunt, voluptas illo beatae perferendis distinctio voluptatum laboriosam quae ut aperiam iusto ipsa delectus aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quasi non quis? Quo libero est, quas, doloremque magnam amet, veniam dicta deserunt eius magni quibusdam alias aut sit? Quia, explicabo.</p>
          <ul className='allergens'>
            <li><img src={Gluten} alt="gluteSimbol" className='allergenSimbol' /></li>
            <li><img src={Eggs} alt="eggsSimbol" className='allergenSimbol' /></li>
            <li><img src={Nuts} alt="nutsSimbol" className='allergenSimbol' /></li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;