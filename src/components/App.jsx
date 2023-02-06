import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import { api } from "./services/api";


export class App extends Component {

  state = {
    query: '',
    images: []
  }

  async componentDidMount() {
    console.log(await api('cat'));
  }

  async componentDidUpdate() {
    const response = await api(this.state.query);
    const filtredResponse = [];
    response.map( ({id, webformatURL, largeImageURL}) => {
      filtredResponse.push({id, webformatURL, largeImageURL})
    })
    this.setState({ images: filtredResponse });

  }
  handleFormSubmit = (event) =>{
    event.preventDefault();
    this.setState({ query: event.target.elements.query.value });
  }
  render () {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.images}/>
      </div>
    );
  }
};
