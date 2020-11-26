import React from 'react';

import Navbar from '../../components/blocks/navbar/Navbar'

import ImageBannerTest from '../../public/banner-1.png';

const HomeMain = (props) => {

  let urlVideoDemo = 'https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/61/e4/ec/61e4ec0e-05b0-4ef6-885b-5d4c48632816/mzvf_7578850305523533157.640x358.h264lc.U.p.m4v';

  return (
    <div>
      <Navbar/>

      <div id="baner">
        <div className="group-action">
          <video id="video-banner-action" src={urlVideoDemo} autoPlay muted
                 className="video-action"></video>
          <img src={ImageBannerTest} alt="img-poster" className="img-poster"/>
        </div>

        <div className="group-infor">
          <h1 className="infor-name-trailer">SpaceX Falcon 9</h1>
          <p className="infor-description">
            "IT’S TIME. We’ve all waited a long time for this one to come. I can’t tell you how excited I am for all of
            you
            to see this movie. It wasn’t an easy decision and we never thought we’d have to hold onto the release for
            such a
            long time but COVID rocked all of our worlds.
          </p>

          <div className="group-link">
            <a href="#" className="btn btn-light mr-3">
              <i className="fa fa-play-circle" aria-hidden="true"></i>
              Xem phim
            </a>

            <a href="#" className="btn btn-outline-light">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              Thông tin chi tiết
            </a>
          </div>
        </div>
      </div>

      <div id="content">
        <section className="section-common">
          <div className="container-fluid">
            <div id="carouselFilmCommon" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">SpaceX Falcon 9</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Black Pink</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Wonder Woman</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Tom and jerry 2021</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">SpaceX Falcon 9</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Black Pink</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Wonder Woman</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Tom and jerry 2021</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">SpaceX Falcon 9</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Black Pink</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Wonder Woman</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-3 my-2">
                      <div className="card text-left">
                        <div className="top-inner">
                          <img className="card-img-top" src={ImageBannerTest} alt=""/>
                          <video className="card-video-top" src={urlVideoDemo} muted></video>
                        </div>

                        <div className="card-body">
                          <h4 className="name-film">Tom and jerry 2021</h4>
                          <div className="group-btn">
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-ouline-light">
                              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a className="carousel-control-prev" href="#carouselFilmCommon" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselFilmCommon" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section-popular mt-5">
          <div className="container-fluid">
            <div className="title">
              <h1>
                <i className="fa fa-fire-alt" aria-hidden="true"></i>
                Hiện đang thịnh hành
              </h1>
            </div>
            <div className="content">

              <div className="row">
                <div className="col-md-8">
                  <div className="trailer-popular video-control">
                    <video src={urlVideoDemo}></video>
                    <div className="controls">
                      <div className="play-video">
                        <i className="fa fa-play-circle" aria-hidden="true"> </i>
                        <i className="fa fa-pause-circle" aria-hidden="true"></i>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content-popular">
                    <h1 className="name-film">
                      Lorem ipsum dolor sit amet
                    </h1>

                    <p className="description-film">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam unde maxime reiciendis
                      beatae necessitatibus vitae aspernatur odio, minima dolorum distinctio et ab architecto iusto,
                      fuga
                      cupiditate commodi autem earum!
                    </p>

                    <div className="group-btn">
                      <a href="#" className="btn btn-light mr-3">
                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                        Xem phim
                      </a>

                      <a href="#" className="btn btn-outline-light">
                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                        Thông tin chi tiết
                      </a>
                    </div>
                  </div>
                </div>


                <div className="col-md-12 mt-5">
                  <div id="carouselFilmPopular" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">SpaceX Falcon 9</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Black Pink</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Wonder Woman</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Tom and jerry 2021</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">SpaceX Falcon 9</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Black Pink</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Wonder Woman</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Tom and jerry 2021</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">SpaceX Falcon 9</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Black Pink</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Wonder Woman</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-3 my-2">
                            <div className="card text-left">
                              <div className="top-inner">
                                <img className="card-img-top" src={ImageBannerTest} alt=""/>
                                <video className="card-video-top" src={urlVideoDemo}
                                       muted></video>
                              </div>

                              <div className="card-body">
                                <h4 className="name-film">Tom and jerry 2021</h4>
                                <div className="group-btn">
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                  </a>
                                  <a href="#" className="btn btn-ouline-light">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselFilmPopular" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselFilmPopular" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className="group-link-footer social-media">
                <li className="item">
                  <a href="#" className="link">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="#" className="link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="#" className="link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="#" className="link">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="group-link-footer">
                <li className="item">
                  <a href="#" className="link">Giới thiệu</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Điều khoản sử dụng</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Công bố chất lượng</a>
                </li>

              </ul>
            </div>
            <div className="col-md-3">
              <ul className="group-link-footer">
                <li className="item">
                  <a href="#" className="link">Truyền hình</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Phim</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Thiếu nhi</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Thể thao</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="group-link-footer">
                <li className="item">
                  <a href="#" className="link">Hài</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Nhạc</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Khoan giáo</a>
                </li>
                <li className="item">
                  <a href="#" className="link">Cộng đồng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
};

export default HomeMain;
