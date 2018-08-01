import React from 'react'

import Header from './Header'
import Main from './Main'

class App extends React.Component {
  constructor(props) {
    super(props);

    /* this.props.initialize({
      languages: ['en','fr'],
      translation: enTranslations,
      options: { renderToStaticMarkup }
    }); */

    // this.props.addTranslation(enTranslations);
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

export default App
