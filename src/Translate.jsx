import React,  { Component } from 'react';

class Translate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            translatedText: '',
            textToTranslate: ''
        };
    }

    render() {
        return(
            <div>
                <input type="text" name="text-to-translate" value={ this.state.textToTranslate } onChange={(e) => this.setTextToTranslate(e)} />
                <button type="button" onClick={(e) => this.translateText(this.state.textToTranslate) }>Translate it!</button>
                <hr />
                <p>{ this.state.translatedText }</p>
            </div>
        );
    }

    setTextToTranslate = (e) => {
        return this.setState({
            textToTranslate: e.target.value
        });
    };

    translateText = (textToTranslate) => {
        fetch('https://api.funtranslations.com/translate/pirate.json?text=' + textToTranslate.split(' ').join('%20'), {
			method: 'GET',
		})
		.then((response) => response.json())
        
		.then((data) => {
            console.log(data)
			this.setState({
				translatedText: data.contents.translated
			})
        alert(data.contents.translated);
		});
    };
}

export default Translate;