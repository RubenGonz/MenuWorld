import './Style.scss';
import Person from '../../assets/images/Person.jpg';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function Profile() {
  return (
    <>
      <main className='profile'>
        <div className='content'>
          <section className='infoSection'>
            <img src={Person} alt="user profile img" className='userImage' />
            <div className='userInfo'>
              <h3 className='userName'>User name</h3>
              <p className='userJob'>User job</p>
              <p>User biography User biography User biography User biography User biography User biographyUser biography User biography User biography User biography User biography User biographyUser biography User biography User biography User biography </p>
            </div>
          </section>
          <section className='buttons'>
            <button>Edit profile</button>
            <button>New recipe</button>
          </section>
          <section className='recipes'>
            <h2>Recipes</h2>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Highlights
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lunch
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Desserts
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Profile;