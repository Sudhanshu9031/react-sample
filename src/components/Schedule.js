import React from 'react'
import { withLocalize, Translate } from 'react-localize-redux';
import internalFrTranslations from '../translations/internal-fr.json';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.props.addTranslationForLanguage(internalFrTranslations, "fr");
  }
  render(){
    return(
      <div>
    
      <div><Translate id="book1"></Translate></div>
      <div><Translate id="book2"></Translate></div>
      <div><Translate id="book3"></Translate></div>
    
  </div>
    )
  }
}


export default withLocalize(Schedule)
