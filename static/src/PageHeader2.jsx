import React, { useState } from 'react';
import './CSS/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function PageHeader2() {
  return (
    <div id="top-nav" className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header visible-sm visible-xs">
          <a id="site-brand" className="navbar-brand logo-text" href="/">
            <span>Dr Elizabeth Varughese</span>
          </a>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <a id="site-brand" className="navbar-brand" href="/">
              <span>Dr Elizabeth Varughese</span>
              <img src="https://drelizabethobgyn.com.au/app/themes/elizabethv/img/logo.png" alt="Logo" />
            </a>
          </div>

          <div className="col-sm-7">
            <div id="full-nav" className="collapse navbar-collapse">
              <ul id="menu-primary-menu" className="nav navbar-nav">
                <li className="menu-item"><a href="https://drelizabethobgyn.com.au/gynaecology/">Gynaecology &amp; Infertility</a></li>
                <li className="menu-item"><a href="https://drelizabethobgyn.com.au/robotic-surgery/">Robotic Surgery</a></li>
                <li className="menu-item"><a href="https://drelizabethobgyn.com.au/urodynamics/">Incontinence and Urodynamics</a></li>
                <li className="menu-item"><a href="https://drelizabethobgyn.com.au/contact/">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2">
            <a href="tel:(02) 6766 1958">
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faPhone} size="2x" /> (02) 6766 1958
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader2;
