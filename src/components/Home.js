import React from "react";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>
          <strong>
            Welcome To <br />
            Shoppers Stop
          </strong>
        </h1>
      </div>

      <footer>
        <div>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div>
                  <h4>About Shoppers Stop</h4>
                  <p>
                    Shoppers Stop is home to a multitude of leading
                    international and national brands for apparels, fragrances,
                    accessories, cosmetics, footwear, home décor and furnishings
                    catering to the needs of the entire family. We aspire to
                    provide our customers a memorable international shopping
                    experience. We are one of the largest chain of department
                    stores across India.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div>
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Customer Service</a>
                    </li>
                    <li>
                      <a href="/">Locate Us</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div>
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>Address: Bangalore!</p>
                    </li>
                    <li>
                      <p>
                        Phone:
                        <a href="#">1234567890</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Email:
                        <a href="#">shoppersstop@gmail.com</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
