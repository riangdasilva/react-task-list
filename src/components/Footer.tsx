export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <p className="max-w-sm text-center">Made by Rian &copy; {new Date().getFullYear()}</p>
      <p>
        See more in my{' '}
        <a href="https://github.com/riangdasilva" target="_blank" className="font-bold hover:underline">
          GitHub
        </a>{' '}
        profile.
      </p>
    </footer>
  );
}
