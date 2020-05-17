import React from "react";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
          {/* ftco-animate */}
            <div className="col-md-12 heading-section text-center mb-5"> 
              <span className="subheading">Virtual Assistant Services</span>
              <h2 className="mb-2">Our Services &amp; Offers</h2>
            </div>
          </div>
        </div>
        {/* <Service /> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
