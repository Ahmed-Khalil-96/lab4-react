import React from 'react';

export default function Home() {
    return (
        <>
            <h1 className='text-center mt-3'>Lab 3</h1>
            <hr />
            <div className="container">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random" className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random" className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random" className="d-block w-100" alt="Third slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
