import { Injectable } from '@angular/core';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLang: Language = 'es';

  private translations: any = {
    es,
    en
  };

  get lang() {
    return this.currentLang;
  }

  setLanguage(lang: Language) {
    this.currentLang = lang;
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    keys.forEach(k => {
      value = value?.[k];
    });

    return value || key;
  }
}