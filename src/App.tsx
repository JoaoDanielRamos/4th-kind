// * Components
import ThemeButton from './components/ThemeButton';
import Wipe from './components/Wipe';
import { useStore } from './store';
import Header from './components/Header';
import Spiral from './components/Spiral';

// * styles

function App() {
  const { menu } = useStore((state: any) => state.app);

  const styles = {
    App: `w-full min-h-screen flex flex-col items-center bg-home-background bg-light-white ${
      menu ? 'bg-center duration-[0.6s]' : 'bg-[1050px_center]  duration-[1.s]'
    } transition-all ease leading-6 text-light-black dark:bg-dark-black dark:text-dark-white text-2xl`,
  };

  return (
    <div className={styles.App}>
      <Header />
      <ThemeButton />
      <Spiral />
      <Wipe />
    </div>
  );
}

export default App;
