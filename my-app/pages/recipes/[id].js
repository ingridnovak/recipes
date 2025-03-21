import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';
import { Suspense } from 'react';

export default function RecipeDetails({ recipe }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pb-20 sm:p-12 sm:pb-20">
        <Suspense fallback={<p>Loading recipes...</p>}>
          <main className="max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4" />
            <p>Servings: {recipe.servings}</p>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <p>Cooking time: {recipe.cookingMinutes} minutes</p>
            <p>Preparation time: {recipe.preparationMinutes} minutes</p>
            <p className="mt-4">{recipe.instructions}</p>
          </main>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const apiKey = process.env.API_KEY;

  const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);

  if (!res.ok) {
    console.error('Failed to fetch recipe details:', res.statusText);
    return {
      notFound: true,
    };
  }

  const recipe = await res.json();

  return {
    props: {
      recipe,
    },
  };
}
