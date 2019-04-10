import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="contactus.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Address</h5>
                    <address>
		              1783 Lucretia Ave<br />
		              San Jose<br />
		              California 95122<br />
		              <i className="fa fa-phone fa-lg"></i>: +469 248 6344<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:meghna.ragu@gmail.com">
                         meghna.ragu@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href="http://github.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2019 Meghna Raguraman</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;