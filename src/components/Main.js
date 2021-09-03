import React from 'react'

const Main = () => {
  return (
    <div class="px-16 py-6 bg-gray-100 md:col-span-4">

      <div class="flex justify-center md:justify-end">
        <a
          href="/"
          class="btn text-bashir border-bashir md:border-2 hover:bg-bashir hover:text-white transition ease-out duration-500"
        >
          Log in
        </a>
        <a
          href="/"
          class="btn text-bashir ml-2 border-bashir md:border-2 hover:bg-bashir hover:text-white transition ease-out duration-500"
        >
          Sign up
        </a>
      </div>

      <div>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 class="text-2xl font-semibold">For Team Members</h3>
      </div>

      <div>

        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div class="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10">

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1524182732116-a3ad2034503c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fDUlMjBiZWFuJTIwY2hpbGxpJTIwc3Rld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">5 Bean Chilli Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Bash</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>34 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1594610352113-ad218529cfb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cnJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">Tofu Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Sidi</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>18 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">Veg. Noodles</span>
              <span class="block text-gray-500 text-sm">Recipe by Salis</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>11 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">Veg. Noodles</span>
              <span class="block text-gray-500 text-sm">Recipe by Salis</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>11 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1524182732116-a3ad2034503c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fDUlMjBiZWFuJTIwY2hpbGxpJTIwc3Rld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">5 Bean Chilli Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Bash</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>34 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1594610352113-ad218529cfb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cnJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">Tofu Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Sidi</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>18 mins</span>
            </div>
          </div>
        </div>

        <h4 class="font-bold my-12 pb-2 border-b border-gray-200">Most Popular</h4>
        <div class="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1524182732116-a3ad2034503c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fDUlMjBiZWFuJTIwY2hpbGxpJTIwc3Rld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">5 Bean Chilli Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Bash</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>34 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1594610352113-ad218529cfb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cnJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">Tofu Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Sidi</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>18 mins</span>
            </div>
          </div>

          <div class="card">
            <img class="w-full h-32 sm:h-48 object-cover" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=" " />
            <div class="m-4">
              <span class="font-bold">Veg. Noodles</span>
              <span class="block text-gray-500 text-sm">Recipe by Salis</span>
            </div>
            <div class="badge">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>11 mins</span>
            </div>
          </div>
        </div>

        <div class="mt-4 flex justify-center">
          <div class="load-more">Load more</div>
        </div>
      </div>
    </div>
  )
}

export default Main
