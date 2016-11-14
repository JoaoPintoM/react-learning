import React, { Component } from 'react';
import axios from 'axios';
import EstateList from './estateListComponent';

class EstateContainer extends Component {
  constructor(props) {
    super(props);
    this.staticUrl = 'https://static.tipi.be/';
    this.state = {
      estates: [],
      name: '',
    };
  }

  componentDidMount() {
    this.setState({ name: 'Bouba' });
    axios
      .get('https://api.tipi.be/api/estates')
      .then((response) => {
        console.log(response.data[0].city);

        const estates = response.data.map((e) => {
          e.picture = this.getThumb('medium', e.pictures[0]);
          return e;
        })

        this.setState({
          estates: estates
        });

        console.log(this.state.estates);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getComponent(event) {
     console.log('li item clicked!');
     event.currentTarget.style.backgroundColor = '#ccc';
   }

  getThumb(reso, path) {
    if (!path) return this.staticUrl + '/img/nopicture.jpg'
    return this.staticUrl + '/' + path.replace(/^(.+)\/([^\/]+)$/, "$1/thumbs/" + reso + '_$2')
  }
  changeImageUrlClicked(that, idEstate){
    console.log(that);
    console.log('Id Estate clicked ', idEstate);
    console.log(this.state.estates);
    const estates = this.state.estates.map((e) => {
      if (e._id === idEstate)
        e.picture = ''

      return e;
    });

    this.setState({
      estates: estates
    });
  }

  render() {
    return <EstateList estates={this.state.estates}
      onClickImage={this.changeImageUrlClicked}/>
  }
}

export default EstateContainer;
