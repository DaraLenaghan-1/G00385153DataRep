import React from 'react';
import '../App.css';
import Logo from './logo.png';


export class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <font color="white"><h1>GuideCentral</h1></font>
        <img src={Logo} height="200" width="200" alt="logo" />
        <font color="white"><h3>Welcome to GuideCentral,The best and latest tv shows</h3></font>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <font color="white"><h3>Want To compare or Research? Try These Useful links: </h3></font>
        <a href="https://www.imdb.com/">IMDB</a>
        <br></br>
        <a href="https://www.netflix.com/ie/browse/genre/83">Netflix</a>
        <br></br>
        <a href="https://www.rottentomatoes.com/">Rotten Tomatoes</a>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>

        {/*Social media section */}
        <font color="white"></font><h4 align="left">Find GuideCentral on various social media sites:</h4>
        <h5 align="left"> <img align="left" src="https://banner2.cleanpng.com/20180802/czs/kisspng-malta-blockchain-summit-ad-fraud-advertising-indus-twitter-logo-png-5b6352722ae8d6.4341314915332358261758.jpg" height="30" width="30"></img><a href="https://twitter.com">Twitter</a></h5>
        <h5 align="left"><img align="left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbKjVw-Jec7BN-UUaF6MGv_MKsLWfcQO8SkfykmE&s" height="30" width="30"></img><a href="https://facebook.com">Facebook</a></h5>
        <h5 align="left"><img align="left" src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-instagram-icon-png-image_3584853.jpg" height="30" width="30"></img><a href="https://instagram.com">Instagram</a></h5>

        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <font color="white"></font><h2>Current Time {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Home;