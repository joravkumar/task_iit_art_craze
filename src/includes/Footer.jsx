import React from 'react';

const Footer = _ => {
    return (
        <footer className="mt-5">
            <div className="footer-box">
                <div className="box-title">
                    About Us
            </div>
                <div className="box-data">
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna
                        aliquam.
                </p>
                </div>
            </div>
            <div className="footer-box">
                <div className="box-title">
                    Recent Posts
            </div>
                <div className="box-data">
                    <p>Galley Posts Here</p>
                    <p>Galley Posts Here....</p>
                    <p>Galley Posts Here Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna
                    aliquam.</p>
                    <p>Galley Posts Here</p>
                </div>
            </div>
            <div className="footer-box">
                <div className="box-title">
                    Subscribe Us
            </div>
                <div className="box-data">
                    <input type="email" placeholder="5our email" name="" id="" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-box">
                <div className="box-title">
                    Follow Us
            </div>
                <div className="box-data">
                    <div className="social-icons">
                        <div className="icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 0H4C1.794 0 0 1.794 0 4V28C0 30.206 1.794 32 4 32H16V21H12V16H16V12C16 8.686 18.686 6 22 6H26V11H24C22.896 11 22 10.896 22 12V16H27L25 21H22V32H28C30.206 32 32 30.206 32 28V4C32 1.794 30.206 0 28 0Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div className="icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.1688 0H8.8306C3.96141 0 0 3.9616 0 8.83079V23.169C0 28.0384 3.96141 31.9998 8.8306 31.9998H23.1688C28.0384 31.9998 31.9998 28.0382 31.9998 23.169V8.83079C32 3.9616 28.0384 0 23.1688 0ZM29.1608 23.169C29.1608 26.4729 26.4729 29.1606 23.169 29.1606H8.8306C5.52693 29.1608 2.83918 26.4729 2.83918 23.169V8.83079C2.83918 5.52712 5.52693 2.83918 8.8306 2.83918H23.1688C26.4727 2.83918 29.1606 5.52712 29.1606 8.83079V23.169H29.1608Z"
                                    fill="black" />
                                <path d="M15.9999 7.75476C11.4533 7.75476 7.75439 11.4536 7.75439 16.0003C7.75439 20.5468 11.4533 24.2455 15.9999 24.2455C20.5466 24.2455 24.2455 20.5468 24.2455 16.0003C24.2455 11.4536 20.5466 7.75476 15.9999 7.75476ZM15.9999 21.4061C13.019 21.4061 10.5936 18.9811 10.5936 16.0001C10.5936 13.019 13.0188 10.5938 15.9999 10.5938C18.9811 10.5938 21.4063 13.019 21.4063 16.0001C21.4063 18.9811 18.9809 21.4061 15.9999 21.4061Z"
                                    fill="black" />
                                <path d="M24.5912 5.34735C24.0442 5.34735 23.5068 5.56881 23.1205 5.95683C22.7323 6.34296 22.5092 6.88051 22.5092 7.42941C22.5092 7.97662 22.7325 8.51398 23.1205 8.902C23.5067 9.28813 24.0442 9.51148 24.5912 9.51148C25.1401 9.51148 25.6758 9.28813 26.0638 8.902C26.4518 8.51398 26.6733 7.97643 26.6733 7.42941C26.6733 6.88051 26.4518 6.34296 26.0638 5.95683C25.6777 5.56881 25.1401 5.34735 24.5912 5.34735Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div className="icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 3.07888C30.8223 3.60076 29.5585 3.9547 28.2307 4.11271C29.5865 3.30084 30.6243 2.0131 31.1162 0.483375C29.8444 1.23522 28.4407 1.78115 26.9449 2.0771C25.7472 0.799349 24.0435 0.003479 22.1538 0.003479C18.5285 0.003479 15.589 2.94293 15.589 6.56626C15.589 7.08014 15.647 7.58205 15.759 8.062C10.3041 7.78801 5.46699 5.17452 2.22961 1.20322C1.6637 2.17106 1.34176 3.2988 1.34176 4.50262C1.34176 6.78022 2.50155 8.78984 4.26124 9.96558C3.18542 9.92961 2.17361 9.63366 1.2878 9.14174V9.22373C1.2878 12.4031 3.55138 15.0566 6.5528 15.6605C6.00289 15.8085 5.42302 15.8905 4.82312 15.8905C4.39923 15.8905 3.98929 15.8485 3.58736 15.7685C4.42318 18.378 6.84676 20.2757 9.71824 20.3277C7.47264 22.0874 4.64116 23.1332 1.56576 23.1332C1.03588 23.1332 0.513944 23.1012 6.10352e-05 23.0432C2.90553 24.9089 6.35489 25.9967 10.0622 25.9967C22.1379 25.9967 28.7387 15.9945 28.7387 7.32014L28.7167 6.47031C30.0064 5.55041 31.1222 4.39465 32 3.07888Z"
                                    fill="#010002" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;