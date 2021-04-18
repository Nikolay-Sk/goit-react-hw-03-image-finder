import { Component } from "react";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import * as API from "./services/api";
import Spinner from "./components/Spinner";
import style from "./App.module.css";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isModalOpen: false,
    isLoading: false,
  };

  componentDidUpdate(prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  openModal = (modalImage) => {
    this.setState({ isModalOpen: true, modalImage });
    window.addEventListener("keydown", this.closeModal);
  };

  closeModal = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape")
      this.setState({ isModalOpen: false });
    window.removeEventListener("keydown", this.closeModal);
  };

  onSubmit = (query) => {
    this.setState({ query, isLoading: true });
    API.getImages(query)
      .then((resData) => {
        console.log("resData", resData);
        this.setState({ images: resData.data.hits });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    const { query, page } = this.state;
    API.getImages(query, page + 1).then((resData) => {
      this.setState((prevState) => ({
        page: prevState.page + 1,
        images: [...prevState.images, ...resData.data.hits],
      }));
    });
  };

  render() {
    const { images, isModalOpen, modalImage, isLoading } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Spinner />}
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 11 && <Button changePage={this.changePage} />}
        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
