import React from 'react'


class LanguageSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lang: 'en'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({lang: event.target.value});
        this.changeData();
    }

    changeData() {
        //alert(this.state.lang)
        this.setState({})
    }

    render() {
        const msg = 'Lang Is: '+this.state.lang;
        return (
            <div>
            <select value={this.state.lang} onChange={this.handleChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
            <p>{msg}</p>
            </div>
        );
    }
}

export default LanguageSelect