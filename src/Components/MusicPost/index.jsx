import React, { PureComponent } from 'react'
import Header from '../../includes/Header';
import ReactHowler from 'react-howler';
import Footer from '../../includes/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { Helper } from '../../includes/Helper';
import BASEURL from '../../includes/BASEURL';
var interval;


export default class MusicPost extends PureComponent {
    constructor() {
        super();
        this.state = {
            play: false,
            duration: undefined,
            volume: 50,
            sound: undefined,
            currentTime: 0,
            seek: undefined,
            fav: false,
            currentSongId: 1,
            post:[]
        }
    }

    componentWillMount() {
        Helper('GET', `posts/single/${this.props.match.params.musicId}`, '', '')
            .then(response => {
                if (response.success) {
                    console.log(response);
                    this.setState({
                        post: response.post[0]
                    })
                } else {
                    console.log(response.msg);
                    toast.error('Server Error');
                }
            })
    }

    toggleFav = _ => this.setState({ fav: !this.state.fav })

    getSeek = _ => this.setState({ currentTime: this.player.seek() })

    setSeek = e => { this.player.seek(e.target.value); this.setState({ currentTime: this.player.seek() }) };

    getTime = (s) => {
        let d, h, m;
        s = Math.floor(s);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        h += d * 24;
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if (h > 0)
            return h + ':' + m + ':' + s;
        else
            return m + ':' + s;
    }

    toggleRepeat = _ => this.setState({ loop: !this.state.loop })

    togglePlay = _ => this.setState({ play: !this.state.play }, () => { this.timer() });

    handleVolume = e => this.setState({ volume: e.target.value });

    songLoaded = _ => this.setState({ duration: this.player.duration(), }, () => { this.timer(); })

    // playNext = _ => this.setState({
    //     currentSongId: this.state.currentSongId + 1
    // }, _ => {
    //     songList.map(song => {
    //         if (song.id === this.state.currentSongId)
    //             this.setState({ song })
    //         return true;
    //     })
    // });

    timer = () => {
        if (this.state.play) {
            interval = setInterval(() => {
                this.getSeek();
            }, 1000);
        }
        else
            clearInterval(interval);
    }

    // componentDidUpdate() {
    //     console.log(BASEURL+this.state.post.image)
    // }

    // soundError = _ => toast.error("error while loading")
    render() {

        const { play, volume, duration, currentTime, fav, song } = this.state;

        return (
            <>
                <Header />
                <ReactHowler src={BASEURL+this.state.post.image} volume={volume / 100} ref={ref => this.player = ref} playing={play} loop={true} onLoad={_ => this.songLoaded()} />
                <div className="container">
                    <div className="header">
                        <div className="poster-wrapper" style={{ backgroundImage: `url('${require(`../../assets/img/background-login.jpg`)}')` }} />

                        {/* <div className="favourite-icon-wrapper" onClick={_ => this.toggleFav()}>
                            {fav ?
                                <svg className="filled" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 14.0125L6.9125 13.0225C3.05 9.52 0.5 7.21 0.5 4.375C0.5 2.065 2.315 0.25 4.625 0.25C5.93 0.25 7.1825 0.8575 8 1.8175C8.8175 0.8575 10.07 0.25 11.375 0.25C13.685 0.25 15.5 2.065 15.5 4.375C15.5 7.21 12.95 9.52 9.0875 13.03L8 14.0125Z" fill="#D21010" />
                                </svg>
                                :
                                <svg className="outline" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.375 0.25C10.07 0.25 8.8175 0.8575 8 1.8175C7.1825 0.8575 5.93 0.25 4.625 0.25C2.315 0.25 0.5 2.065 0.5 4.375C0.5 7.21 3.05 9.52 6.9125 13.03L8 14.0125L9.0875 13.0225C12.95 9.52 15.5 7.21 15.5 4.375C15.5 2.065 13.685 0.25 11.375 0.25ZM8.075 11.9125L8 11.9875L7.925 11.9125C4.355 8.68 2 6.5425 2 4.375C2 2.875 3.125 1.75 4.625 1.75C5.78 1.75 6.905 2.4925 7.3025 3.52H8.705C9.095 2.4925 10.22 1.75 11.375 1.75C12.875 1.75 14 2.875 14 4.375C14 6.5425 11.645 8.68 8.075 11.9125Z" fill="black" />
                                </svg>
                            }
                        </div> */}
                    </div>
                    <div className="song-info-wrapper">
                        <div className="song-title">{this.state.post.post_name}</div>
                        <div className="artist-title">
                            By - song artist
                        </div>
                    </div>
                    <div className="seek-slider">
                        <div className="controller-wrapper">
                            <input type="range" value={currentTime} max={duration} className="controller" onChange={e => this.setSeek(e)} />
                        </div>
                    </div>
                    <div className="controller-timings">
                        <span className="left-time">{this.getTime(currentTime)}</span>
                        <span className="right-time">{duration === undefined ? '00:00' : this.getTime(duration)}</span>
                    </div>
                    <div className="controls">
                        <button className="icon repeat-icon" onClick={_ => this.toggleRepeat()}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.959146 14.2179C1.27115 14.2179 1.52335 13.9657 1.52335 13.6537C1.52335 10.2318 4.30769 7.44748 7.72957 7.44748H21.2704V12.505L29 6.88328L21.2704 1.26157V6.31908H7.72957C3.68537 6.31908 0.394943 9.6095 0.394943 13.6537C0.394943 13.9657 0.647142 14.2179 0.959146 14.2179Z" fill="black" />
                                <path d="M28.0409 14.7821C27.7289 14.7821 27.4767 15.0343 27.4767 15.3463C27.4767 18.7682 24.6923 21.5525 21.2704 21.5525H7.72957V16.495L0 22.1167L7.72957 27.7384V22.6809H21.2704C25.3146 22.6809 28.6051 19.3905 28.6051 15.3463C28.6051 15.0343 28.3529 14.7821 28.0409 14.7821Z" fill="black" />
                            </svg>
                        </button>
                        <button className="icon backward-icon">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0.216227 14.9157L13.9531 24.5823C14.1088 24.6922 14.3107 24.7055 14.4802 24.6179C14.6486 24.5309 14.7544 24.3564 14.7544 24.1667V15.1222L28.1987 24.5767C28.3539 24.6851 28.5564 24.6993 28.7258 24.6118C28.8942 24.5243 29 24.3498 29 24.16V4.83943C29 4.64966 28.8942 4.47515 28.7258 4.38765C28.6515 4.35 28.5711 4.33117 28.4912 4.33117C28.3885 4.33117 28.2862 4.36271 28.1987 4.42377L14.7544 13.8778V4.83333C14.7544 4.64356 14.6486 4.46905 14.4802 4.38154C14.4059 4.34338 14.3255 4.32456 14.2456 4.32456C14.1428 4.32456 14.0401 4.3561 13.9531 4.41766L0.216227 14.0843C0.0803833 14.179 -1.90735e-06 14.3346 -1.90735e-06 14.5C-1.90735e-06 14.6653 0.0803833 14.821 0.216227 14.9157Z" fill="black" />
                                </g>
                            </svg>
                        </button>
                        {play ?
                            <button className="icon pause-icon" onClick={_ => this.togglePlay()}>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5405 27.955C12.5405 28.5321 12.0726 29 11.4954 29H5.74771C5.17055 29 4.70267 28.5321 4.70267 27.955V1.04504C4.70267 0.467885 5.17055 0 5.74771 0H11.4954C12.0726 0 12.5405 0.467885 12.5405 1.04504V27.955Z" fill="black" />
                                    <path d="M24.2973 27.955C24.2973 28.5321 23.8294 29 23.2523 29H17.5046C16.9274 29 16.4595 28.5321 16.4595 27.955V1.04504C16.4595 0.467885 16.9274 0 17.5046 0H23.2523C23.8294 0 24.2973 0.467885 24.2973 1.04504V27.955Z" fill="black" />
                                </svg>
                            </button>
                            :
                            <button className="icon play-icon" onClick={_ => this.togglePlay()}>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.9047 13.9314L4.88039 0.121514C4.66841 -0.0241803 4.39359 -0.0393712 4.16711 0.078703C3.93994 0.198158 3.7977 0.432926 3.7977 0.689789V28.3095C3.7977 28.5664 3.93994 28.8018 4.16711 28.9213C4.26792 28.9737 4.3784 29 4.48819 29C4.6256 29 4.76232 28.9586 4.88039 28.8778L24.9047 15.0679C25.0918 14.9388 25.203 14.7268 25.203 14.4996C25.203 14.2725 25.0911 14.0605 24.9047 13.9314Z" fill="black" />
                                </svg>
                            </button>
                        }
                        <button className="icon forward-icon" onClick={_ => this.playNext()}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M28.7838 14.0843L15.0469 4.41767C14.8912 4.30778 14.6893 4.29455 14.5198 4.38206C14.3514 4.46906 14.2456 4.64357 14.2456 4.83334V13.8778L0.801316 4.42327C0.64614 4.3149 0.443649 4.30065 0.274228 4.38816C0.105825 4.47567 0 4.65018 0 4.83995V24.1606C0 24.3503 0.105825 24.5248 0.274228 24.6124C0.348509 24.65 0.428895 24.6688 0.508772 24.6688C0.611544 24.6688 0.713807 24.6373 0.801316 24.5762L14.2456 15.1222V24.1667C14.2456 24.3564 14.3514 24.531 14.5198 24.6185C14.5941 24.6566 14.6745 24.6754 14.7544 24.6754C14.8572 24.6754 14.9599 24.6439 15.0469 24.5823L28.7838 14.9157C28.9196 14.821 29 14.6654 29 14.5C29 14.3347 28.9196 14.179 28.7838 14.0843Z" fill="black" />
                                </g>
                            </svg>
                        </button>
                        <button className="icon shuffle-icon">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M15.7545 8.0815H21.006V13.312L29 7.49799L21.006 1.68399V6.91449H15.7545C11.572 6.91449 8.16901 10.3175 8.16901 14.5C8.16901 18.0389 5.28944 20.9185 1.7505 20.9185H0.583501C0.260825 20.9185 0 21.1793 0 21.502C0 21.8247 0.260825 22.0855 0.583501 22.0855H1.7505C5.93304 22.0855 9.33602 18.6825 9.33602 14.5C9.33602 10.9611 12.2156 8.0815 15.7545 8.0815Z" fill="black" />
                                    <path d="M0.583501 8.08149H1.7505C3.33354 8.08149 4.85356 8.66149 6.03107 9.71471C6.14252 9.81449 6.28197 9.8635 6.42026 9.8635C6.58014 9.8635 6.74002 9.79815 6.85497 9.6692C7.0697 9.4288 7.04928 9.06002 6.80946 8.84529C5.41781 7.6001 3.62121 6.91449 1.7505 6.91449H0.583501C0.260825 6.91449 0 7.17531 0 7.49799C0 7.82067 0.260825 8.08149 0.583501 8.08149Z" fill="black" />
                                    <path d="M21.006 20.9185H15.7545C14.1878 20.9185 12.6795 20.349 11.5078 19.3151C11.268 19.1021 10.8986 19.1243 10.6845 19.367C10.4715 19.6086 10.4943 19.9773 10.7364 20.1903C12.1216 21.4127 13.9042 22.0855 15.7551 22.0855H21.0066V27.316L29.0006 21.502L21.006 15.688V20.9185Z" fill="black" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="volume-slider">
                        <div className="controller-wrapper">
                            <input type="range" min="0" max="100" onChange={e => this.handleVolume(e)} value={volume} className="controller" />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
