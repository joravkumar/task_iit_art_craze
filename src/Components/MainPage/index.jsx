import React, { PureComponent } from 'react'
import Header from '../../includes/Header';
import photo from '../../assets/img/background-login.jpg'
import Footer from '../../includes/Footer';
import { Link } from 'react-router-dom';
import { Helper } from '../../includes/Helper';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import BASEURL from '../../includes/BASEURL';
// import Header from '../../includes/Header';
// import Cards from './Cards';
const items = [
  {
    src: photo,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: photo,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: photo,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export default class MainPage extends PureComponent {

  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      categories: []
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentWillMount() {
    Helper('GET', 'category', '', '')
      .then(response => {
        console.log(response);
        if (response.success) {
          this.setState({
            categories: response.categories
          })
        } else {
          console.log(response.msg);
          toast.error('Server Error');
        }
      })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <>
        <Header />
        <ToastContainer />
        <div className="container">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
        <div className="container content-wrapper">
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center">
              <h4 className="title">Some Popular Posts</h4>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4">
              <div className="content-item">
                <div className="img">
                  <img src="http://placehold.it/350x300" />
                  <div className="overlay">
                    <div className="title">
                      Why We Love the Charles &
                      Ray Eames Chairs
                        </div>
                  </div>
                </div>
                <p className="content-title">
                  Why We Love the Charles &
                  Ray Eames Chairs
                </p>
                <div className="keep-reading">
                  <a href="./single-post.html">
                    Keep Reading
                        <svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7742 0.544044C10.5562 0.318449 10.1935 0.318449 9.96786 0.544044C9.74989 0.762018 9.74989 1.1248 9.96786 1.34227L14.0565 5.43093H0.564497C0.249984 5.43144 0 5.68142 0 5.99593C0 6.31045 0.249984 6.56856 0.564497 6.56856H14.0565L9.96786 10.6496C9.74989 10.8752 9.74989 11.2385 9.96786 11.456C10.1935 11.6815 10.5567 11.6815 10.7742 11.456L15.8308 6.39936C16.0564 6.18139 16.0564 5.81861 15.8308 5.60114L10.7742 0.544044Z"
                        fill="#565656" />
                    </svg>
                  </a>
                </div>
                <div className="favourite-icon">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                      fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-item">
                <div className="img">
                  <img src="http://placehold.it/350x300" />
                  <div className="overlay">
                    <div className="title">
                      Why We Love the Charles &
                      Ray Eames Chairs
                        </div>
                  </div>
                </div>
                <p className="content-title">
                  Why We Love the Charles &
                  Ray Eames Chairs
                </p>
                <div className="keep-reading">
                  <a href="./single-post.html">
                    Keep Reading
                        <svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7742 0.544044C10.5562 0.318449 10.1935 0.318449 9.96786 0.544044C9.74989 0.762018 9.74989 1.1248 9.96786 1.34227L14.0565 5.43093H0.564497C0.249984 5.43144 0 5.68142 0 5.99593C0 6.31045 0.249984 6.56856 0.564497 6.56856H14.0565L9.96786 10.6496C9.74989 10.8752 9.74989 11.2385 9.96786 11.456C10.1935 11.6815 10.5567 11.6815 10.7742 11.456L15.8308 6.39936C16.0564 6.18139 16.0564 5.81861 15.8308 5.60114L10.7742 0.544044Z"
                        fill="#565656" />
                    </svg>
                  </a>
                </div>
                <div className="favourite-icon">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                      fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-item">
                <div className="img">
                  <img src="http://placehold.it/350x300" />
                  <div className="overlay">
                    <div className="title">
                      Why We Love the Charles &
                      Ray Eames Chairs
                        </div>
                  </div>
                </div>
                <p className="content-title">
                  Why We Love the Charles &
                  Ray Eames Chairs
                </p>
                <div className="keep-reading">
                  <a href="./single-post.html">
                    Keep Reading
                        <svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7742 0.544044C10.5562 0.318449 10.1935 0.318449 9.96786 0.544044C9.74989 0.762018 9.74989 1.1248 9.96786 1.34227L14.0565 5.43093H0.564497C0.249984 5.43144 0 5.68142 0 5.99593C0 6.31045 0.249984 6.56856 0.564497 6.56856H14.0565L9.96786 10.6496C9.74989 10.8752 9.74989 11.2385 9.96786 11.456C10.1935 11.6815 10.5567 11.6815 10.7742 11.456L15.8308 6.39936C16.0564 6.18139 16.0564 5.81861 15.8308 5.60114L10.7742 0.544044Z"
                        fill="#565656" />
                    </svg>
                  </a>
                </div>
                <div className="favourite-icon">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                      fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-item">
                <div className="img">
                  <img src="http://placehold.it/350x300" />
                  <div className="overlay">
                    <div className="title">
                      Why We Love the Charles &
                      Ray Eames Chairs
                        </div>
                  </div>
                </div>
                <p className="content-title">
                  Why We Love the Charles &
                  Ray Eames Chairs
                </p>
                <div className="keep-reading">
                  <a href="./single-post.html">
                    Keep Reading
                        <svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7742 0.544044C10.5562 0.318449 10.1935 0.318449 9.96786 0.544044C9.74989 0.762018 9.74989 1.1248 9.96786 1.34227L14.0565 5.43093H0.564497C0.249984 5.43144 0 5.68142 0 5.99593C0 6.31045 0.249984 6.56856 0.564497 6.56856H14.0565L9.96786 10.6496C9.74989 10.8752 9.74989 11.2385 9.96786 11.456C10.1935 11.6815 10.5567 11.6815 10.7742 11.456L15.8308 6.39936C16.0564 6.18139 16.0564 5.81861 15.8308 5.60114L10.7742 0.544044Z"
                        fill="#565656" />
                    </svg>
                  </a>
                </div>
                <div className="favourite-icon">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                      fill="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center">
              <h4 className="title">Find By Categories</h4>
            </div>
            {this.state.categories.map(v => {
              return (
                <div className="col-md-4" key={v._id}>
                  <div className="card">
                    <img className="card-img-top" src={BASEURL + v.image} alt="Card  cap" />
                    <div className="card-body">
                      <h5 className="card-title title">{v.category_name}</h5>
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                      <Link to={`/category/${v._id}`} className="btn btn-primary">Explore it</Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div >
        <div className="load-posts">
          <button>Load More Posts</button>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.456 10.7742C11.6816 10.5562 11.6816 10.1935 11.456 9.96786C11.238 9.74989 10.8752 9.74989 10.6577 9.96786L6.56907 14.0565L6.56907 0.564497C6.56856 0.249984 6.31858 0 6.00407 0C5.68955 0 5.43144 0.249984 5.43144 0.564497L5.43144 14.0565L1.3504 9.96786C1.1248 9.74989 0.761515 9.74989 0.544048 9.96786C0.318453 10.1935 0.318453 10.5567 0.544048 10.7742L5.60064 15.8308C5.81861 16.0564 6.18139 16.0564 6.39886 15.8308L11.456 10.7742Z"
              fill="#565656" />
          </svg>
        </div>

        <Footer />
      </>
    )
  }
}
