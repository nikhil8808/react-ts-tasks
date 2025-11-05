import { useState, useContext, useEffect, useCallback } from 'react';
import { LanguageContext } from '../context/LanguageContextProvider';

interface LanguageData {
  welcome: string;
  logout: string;
  language: string;
  greeting: string;
  theme_light: string;
  theme_dark: string;
}

// Global cache
const languageCache: Record<string, LanguageData> = {};

const useLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [data, setData] = useState<LanguageData>({
    welcome: '',
    logout: '',
    language: '',
    greeting: '',
    theme_light: '',
    theme_dark: '',
  });

  const fetchLanguageData = useCallback(async () => {
    try {
      if (languageCache[language]) {
        setData(languageCache[language]);
    
        } else {
        const json = await import(`../locales/${language}.json`);
        const jsonData = json.default;
        languageCache[language] = jsonData;
        setData(jsonData);

      }
    } catch (e) {
      // fallback to English
      if (!languageCache['en']) {
        const english = await import(`../locales/en.json`);
        languageCache['en'] = english.default;
      }
      setData(languageCache['en']);
      if (language !== 'en') toggleLanguage('en');
    }
  }, [language, toggleLanguage]);

  useEffect(() => {
    fetchLanguageData();
  }, [fetchLanguageData]);

  return { data, language,toggleLanguage };
};

export default useLanguage;
