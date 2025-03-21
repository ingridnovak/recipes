import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { Suspense } from 'react';

import '@/app/globals.css';

export default function Recipes({ recipes }) {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-12 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold">
          Here is your recipes! Click on the image if you want to see the details
        </h1>
        <Suspense fallback={<p>Loading recipes...</p>}>
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-xl">
            {recipes.length > 0 ? (
              <ul>
                {recipes.map(recipe => (
                  <li key={recipe.id} className="mb-4">
                    <h2 className="text-2xl font-bold">{recipe.title}</h2>
                    <Link href={`/recipes/${recipe.id}`}>
                      <img src={recipe.image} alt={recipe.title} className="w-full h-auto" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recipes found.</p>
            )}
          </main>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query, cuisine, maxReadyTime } = context.query;
  const apiKey = process.env.API_KEY;

  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`;

  if (query) {
    apiUrl += `&query=${query}`;
  }
  if (cuisine) {
    apiUrl += `&cuisine=${cuisine}`;
  }
  if (maxReadyTime) {
    apiUrl += `&maxReadyTime=${maxReadyTime}`;
  }

  const res = await fetch(apiUrl);

  if (!res.ok) {
    console.error('Failed to fetch recipes:', res.statusText);
    return {
      props: {
        recipes: [],
      },
    };
  }

  const data = await res.json();

  return {
    props: {
      recipes: data.results || [],
    },
  };
}
