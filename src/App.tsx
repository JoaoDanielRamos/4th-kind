// * Components
import ThemeButton from './components/ThemeButton';
import Wipe from './components/Wipe';
import { useStore } from './store';
import Header from './components/Header';
import Spiral from './components/Spiral';
import tw from './hooks/tw';

// * styles

function App() {
  const { menu } = useStore((state: any) => state.app);

  const styles = {
    App: [
      'w-full min-h-screen',
      'flex flex-col items-center',
      'bg-home-background',
      'bg-light-white dark:bg-dark-black',
      'text-2xl bg-center',
      menu ? 'bg-[calc(50%_-_100px)_center]' : 'bg-center',
      'transition-all ease duration-[0.8s]',
      'leading-6',
      'text-light-black dark:text-dark-white',
    ],
  };

  return (
    <div className={tw(styles.App)}>
      <Header />
      <ThemeButton />
      <Spiral />
      <Wipe />
    </div>
  );
}

export default App;
