import i18n from 'i18next';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LangType = 'es' | 'en';

interface LangState {
  lang: LangType;
  updateLang: (lang: LangType) => void;
}

const useLang = create<LangState>()(
  persist(
    (set) => ({
      lang: 'es',
      updateLang: (lang) => {
        set({ lang });
        i18n.changeLanguage(lang.toLocaleLowerCase());
      },
    }),
    {
      name: 'lang',
    },
  ),
);

export { useLang };
