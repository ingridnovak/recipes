"use client";
import { useState } from "react";
import Link from "next/link";

const InputForm = () => {
  const [recipeField, setRecipeField] = useState({
    recipeName: "",
    cuisineOptions: "",
    preparationTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeField({
      ...recipeField,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeField);
  };

  const isButtonDisabled = !(
    recipeField.recipeName ||
    recipeField.cuisineOptions ||
    recipeField.preparationTime
  );

  const query = new URLSearchParams({
    query: recipeField.recipeName,
    cuisine: recipeField.cuisineOptions,
    maxReadyTime: recipeField.preparationTime,
  }).toString();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Find a recipe
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Enter the name of the recipe you are looking for and we will find it
            for you. You can also specify the country of origin of the recipe
            and the maximum preparation time in minutes.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-1"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="recipeName"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Enter a recipe query
            </label>
            <input
              onChange={handleChange}
              name="recipeName"
              value={recipeField.recipeName}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="cuisineOptions"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Cuisine options
            </label>
            <select
              value={recipeField.cuisineOptions}
              onChange={handleChange}
              name="cuisineOptions"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="">Select a cuisine</option>
              <option value="african">African</option>
              <option value="asian">Asian</option>
              <option value="american">American</option>
              <option value="british">British</option>
              <option value="cajun">Cajun</option>
              <option value="caribbean">Caribbean</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="preparationTime"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Maximum preparation time in minutes
            </label>
            <input
              value={recipeField.preparationTime}
              onChange={handleChange}
              name="preparationTime"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              type="number"
            />
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <Link
              href={`/recipes?${query}`}
              className={`inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 md:text-base ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700"
              }`}
            >
              Next
            </Link>

            <span className="text-sm text-gray-500">
              You can fill only one of the three fields and we will find the
              recipes
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
