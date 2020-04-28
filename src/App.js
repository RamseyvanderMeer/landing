import React from 'react';
import { Header, Footer, Text, Features, Others, Sub, Com } from './components'

var sectionStyle = {
  width: "100%",
  padding: "0px", 
  margin: "0px",
  opacity: 0.93,
};

var image = {
  maxWidth: "1080px"
}


class App extends React.Component {

  render() {
    return (
      <div style={sectionStyle} >
        <div>
          <Header />
        </div>
        <div style={image} >
          <img src="/background.png" alt="back" style={sectionStyle} />
        </div>
        <div style={sectionStyle}>
          <Footer />
          <Footer />
        </div>
        <div>
          <Text/>
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Others />
        </div>
        <div>
          <Com />
        </div>
        <div>
          <Sub />
        </div>
      </div >
    );

  }
}

export default App;
