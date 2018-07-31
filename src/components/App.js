import React from 'react'

import { initialize } from 'react-localize-redux';

import enTranslations from "../local/common_en.json";
import frTranslations from "../local/common_fr.json";
import Header from './Header'
import Main from './Main'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: ['en','fr'],
      translation: enTranslations,
      options: { renderToStaticMarkup }
    });

    this.props.addTranslationForLanguage(enTranslations, "en");
  }

  render() {
    return(
      <div>
        <Header />
        <Main />
      </div>
    )
    
  }
}

/* const App = () => (
  <div>
    <Header />
    <Main />
  </div>
) */

export default withLocalize(App)
