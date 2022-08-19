import create from 'zustand';

export const useStore: any = create((set: any) => ({
  app: {
    theme: false,
    menu: false,
  },
  // * Check user's OS and set theme.
  getOperationalSystemTheme: () =>
    set((state: any) => {
      state.app.theme
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark');

      return {
        app: {
          ...state.app,
          theme: window.matchMedia('(prefers-color-scheme: dark)').matches,
        },
      };
    }),
  // * Toggle the theme.
  toggleTheme: () =>
    set((state: any) => {
      // * The state hasn't been updated yet, so we need to check the old state in to toggle the theme.
      !state.app.theme
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark');

      return { app: { ...state.app, theme: !state.app.theme } };
    }),
  // * Toggle the menu.
  toggleMenu: () =>
    set((state: any) => ({ app: { ...state.app, menu: !state.app.menu } })),
}));
