import React from 'react'

const Header = () => {
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  const toggle = () => {
    burger.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    })
  }

  return (
    <div class="md:col-span-1 md:flex md:justify-end">
      <nav class="text-right">
        <div class="flex justify-between items-center">
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" class="hover:text-gray-700">Found & Seek Food</a>
          </h1>
          <div class="px-4 cursor-pointer md:hidden" id="burger" onClick={() => toggle()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
        <ul class="text-sm mt-6 hidden md:block" id="menu">
          <li class="text-gray-700 font-bold py-1">
            <a href="/" class="px-4 flex justify-end border-r-4 border-bashir">
              <span>Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </li>
          <li class="py-1">
            <a href="/" class="px-4 flex justify-end border-r-4 border-white">
              <span>About</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </li>
          <li class="py-1">
            <a href="/" class="px-4 flex justify-end border-r-4 border-white">
              <span>Contact</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header