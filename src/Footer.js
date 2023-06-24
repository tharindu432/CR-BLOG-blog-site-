import React from "react";
import 'tachyons';

export default function Footer() {

  return (
    <footer className="pa3 pa4-ns bt-ns b--black-10">
      <div className="dt dt--fixed w-100">
        <div className="dtc v-mid">
          <p className="f6 fw4 mt0 mb0 dark-blue">© 2023 CR BLOG | Chathuranga Ruwanpathirana</p>
        </div>
        <div className="dtc v-mid">
          <a href="/" className="link dim dark-blue dib mr3 mr4-ns">Home</a>
          
          <a href="/contact" className="link dim dark-blue dib">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
