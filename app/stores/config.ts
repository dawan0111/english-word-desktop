import { nativeTheme } from 'electron';
import Store from 'electron-store';

export interface ConfigStoreValues {
  general: {
    theme: 'light' | 'dark';
    developerMode: boolean;
  };
}

export const configStore = new Store<ConfigStoreValues>({
  name: 'config',
  accessPropertiesByDotNotation: false,
  defaults: {
    general: {
      theme: nativeTheme.shouldUseDarkColors ? 'dark' : 'light',
      developerMode: false,
    },
  },
});
