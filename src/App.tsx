import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { selectTheme } from './redux/themeSlice';
import { useAppSelector } from './redux/hooks';

export default function App() {
  const theme = useAppSelector(selectTheme);
  return (
    <div className={`${theme ? 'dark' : 'light'}`}>
      <div className="flex h-full min-h-screen flex-col bg-neutral-100 p-4 text-black dark:bg-neutral-900 dark:text-white">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
