// The smallest Pithyx app: it connects to the desktop, greets the signed-in user in their language, and follows
// language changes. Everything an app may do goes through `app` (see the SDK's documentation).
import { connect } from '@pithyx/sdk';
import { createI18n, pickLanguage } from '@pithyx/sdk/i18n';
import de from '../i18n/de.json';
import en from '../i18n/en.json';
import { nameOf } from './greeting';
import './style.css';

const root = document.querySelector<HTMLElement>('#app')!;

try {
  const app = await connect();
  const render = () => {
    const i18n = createI18n(app, { en, de });
    document.documentElement.lang = i18n.language;
    const heading = document.createElement('h1');
    heading.textContent = i18n.t('greeting', { name: nameOf(app.context.user) });
    const hint = document.createElement('p');
    hint.textContent = i18n.t('hint');
    root.replaceChildren(heading, hint);
    root.removeAttribute('aria-busy');
    void app.window.setTitle(i18n.t('title'));
  };
  render();
  app.on('localeChange', render);
} catch {
  // Opened outside the desktop (directly in a tab): there is no SDK to talk to.
  const messages = pickLanguage(navigator.language, ['en', 'de']) === 'de' ? de : en;
  root.textContent = messages.noDesktop;
  root.removeAttribute('aria-busy');
}
