import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    document.title = process.env.REACT_APP_FIRST_NAME + " " + process.env.REACT_APP_LAST_NAME;
  }

  render() {
    return (
      <div className="container-fluid">
        <section className="resume-section d-flex d-column" id="about">
          <div className="my-auto">
            {/* Current profile pic from https://freeiconshop.com/icon/avatar-icon-outline-filled/ */}
            <img className="img-fluid img-profile rounded-circle mx-auto mb-0" src="img/profile.jpg" alt="" />
            <h1 className="mb-0">{process.env.REACT_APP_FIRST_NAME}<p className="mb-0"></p>
              <span className="text-primary">{process.env.REACT_APP_LAST_NAME}</span>
            </h1>
            <div className="subheading mb-4">
              {/* 3542 Test Street · Test City, CO 80810 · (317) 555-8468 ·
                          <a href="mailto:name@email.com"> name@email.com</a> */}
            </div>
            <p className="mb-4 col-md-10 col-lg-8 col-xl-7 mx-auto">{process.env.REACT_APP_PROFILE_TEXT}</p>
            <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href={process.env.REACT_APP_LINK_FACEBOOK}>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={process.env.REACT_APP_LINK_LINKEDIN}>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={process.env.REACT_APP_LINK_GITHUB}>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}