import React from 'react';

import InfoBox from "../../components/infoBox/InfoBox";
import InfoBoxWide from "../../components/infoBox/InfoBoxWide";
import GridView from "../../components/gridView/GridView"

import './Home.scss';

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">

            {/* Title content */}
            <div className="col-sm-12 my-4">
              <h1 className="m-0">Trang chủ</h1>
            </div>

            {/* content body */}
            <div className="col-sm-12">
              <section className="content">
                <div className="container-fluid">

                  <div className="row">
                    <InfoBox/>
                    <InfoBox/>
                    <InfoBox/>
                    <InfoBox/>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <GridView/>
                    </div>

                    <div className="col-md-4">
                      <div className="row">
                        <InfoBoxWide/>
                        <InfoBoxWide/>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
            {/* end content body */}

          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;