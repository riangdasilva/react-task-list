import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { selectTheme, change } from '../redux/themeSlice';

export default function Header() {
  const darkMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  function ThemeIcon() {
    return (
      <button
        onClick={() => {
          dispatch(change(!darkMode));
        }}
        className="col-start-4 my-auto ml-auto h-8 w-8">
        {darkMode ? <MdLightMode className="h-full w-full" /> : <MdDarkMode className="h-full w-full" />}
      </button>
    );
  }

  return (
    <header className="mb-4 grid grid-cols-4">
      <p className="col-span-2 col-start-2 text-center text-4xl font-bold">My Todo</p>
      <ThemeIcon />
    </header>
  );
}
