// * Components
import ThemeButton from './components/ThemeButton';
import Wipe from './components/Wipe';
import { useStore } from './store';
import Header from './components/Header';
import Spiral from './components/Spiral';
import tw from './modules/tw';

// * styles

function App() {
  const { menu } = useStore((state: any) => state.app);

  const styles = {
    App: [
      // * Sizes
      'w-full min-h-screen',

      // * Flex
      'flex flex-col items-center',

      // * Background
      'bg-home-background bg-light-white dark:bg-dark-black',
      menu ? 'bg-[calc(50%_-_100px)_center]' : 'bg-center',

      // * Transition
      'transition-all ease duration-[0.8s]',

      // * Text
      'text-light-black dark:text-dark-white text-2xl bg-center',

      // * etc
      'leading-6',
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
