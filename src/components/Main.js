import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderToStaticMarkup } from 'react-dom/server';
import ToggleButton from 'react-toggle-button'
import { withLocalize, Translate } from 'react-localize-redux';
import LanguageToggle from '../LanguageToggle';
import globalTranslations from '../translations/global.json';
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
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }

  componentDidUpdate(prevProps) {
    const prevLangCode = prevProps.activeLanguage && prevProps.activeLanguage.code;
    const curLangCode = this.props.activeLanguage && this.props.activeLanguage.code;
    const hasLanguageChanged = prevLangCode !== curLangCode;
    console.log('test', hasLanguageChanged);
  }

  render() {
    return (
      <div>
        <LanguageToggle />
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withLocalize(Main)
