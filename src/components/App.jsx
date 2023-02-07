import { Component } from "react";
import { Grid } from "react-loader-spinner";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import { api } from "./services/api";


export class App extends Component {

  state = {
    query: '',
    page: 1,
    showLoader: false,
    showModal: false,
    modalImg: '',
    images: []
  }


  async componentDidUpdate(_, prevState) {
    const {query, page} = this.state
    const response = await api(query, page);
    const filtredResponse = response.map(({ id, webformatURL, largeImageURL }) => {
        return { id, webformatURL, largeImageURL };
      })
    
    if (query !== prevState.query) {
      this.setState({
        images: filtredResponse,
        showLoader: false
      })
    } 
    // else if (page === 1) {
    //   this.setState({
    //     images: filtredResponse,
    //     showLoader: false
    //   });
    // }

    if (this.state.page > prevState.page) {
      this.setState({
        images: [...this.state.images, ...filtredResponse],
        showLoader: false
      })
      return
    }
  }


  handleFormSubmit = (event) =>{
    event.preventDefault();
    const {value} = event.target.elements.query;
    this.setState((prevState)=>{
      if ( prevState.query !== value ) {
        return ({ query: value, page: 1, showLoader: true });
      }
    })
    
  }

  handleLMBtnClick = () => {
    this.setState((prevState)=>({page: prevState.page + 1, showLoader: true}))
  }

  openModal = (event) => {
    const { alt } = event.target;
    if (alt) {
      this.setState({ showModal: true, modalImg: alt });
      window.addEventListener('keydown', this.closeModal);
    }
    
  }

  closeModal = (event) => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      this.setState({ showModal: false });
      window.removeEventListener('keydown', this.closeModal);
    }
  }

  render () {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery items={this.state.images} onClick={this.openModal} />
        )}
        {this.state.showLoader ? (
          <Grid
            height="120"
            width="80"
            color="#3f51b5"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
          />
        ) : (
          this.state.images.length > 0 && (
            <Button onClick={this.handleLMBtnClick} />
          )
        )}
        {this.state.showModal && (
          <Modal img={this.state.modalImg} onOverlayClick={this.closeModal} />
        )}
      </>
    );
  }
};



 
