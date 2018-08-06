import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderToStaticMarkup } from 'react-dom/server';
import ToggleButton from 'react-toggle-button'
import { withLocalize, Translate } from 'react-localize-redux';

// import LanguageToggle from '../LanguageToggle';

// import globalTranslations from '../translations/global.json';
import englishTranslations from '../translations/global-en.json';
import frenchTranslations from '../translations/global-fr.json';
import spanishTranslations from '../translations/global-sp.json';
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' }, 
        { name: 'French', code: 'fr' }, 
        { name: 'Spanish', code: 'es' }
      ],
      translation: englishTranslations,
      options: { renderToStaticMarkup }
    });
    this.props.addTranslationForLanguage(englishTranslations, "en");
    this.props.addTranslationForLanguage(frenchTranslations, "fr");
    this.props.addTranslationForLanguage(spanishTranslations, "es");
  }

  componentDidUpdate(prevProps) {
    const prevLangCode = prevProps.activeLanguage && prevProps.activeLanguage.code;
    const curLangCode = this.props.activeLanguage && this.props.activeLanguage.code;
    const hasLanguageChanged = prevLangCode !== curLangCode;
    console.log('test', hasLanguageChanged);
  }

  render() {
    return (
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
          </div>
          <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
          </Switch>
          </div>
        </main>
    );
  }
}

export default withLocalize(Main)
