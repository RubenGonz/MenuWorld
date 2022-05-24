import './Style.scss';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import SearchPane from '../../components/SearchPane/SearchPane';

function Home() {
  return (
    <main className='home'>
      <div className="content">
        <section>
          <SearchPane></SearchPane>
        </section>
        <hr />
        <section className='results'>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
        </section>
      </div>
    </main>
  );
}

export default Home;