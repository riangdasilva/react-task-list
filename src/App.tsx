import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  return (
    <div className=" flex h-full min-h-screen flex-col justify-between bg-slate-800 p-2 text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
