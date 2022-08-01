// import React from 'react'
//
// import Footer from './Footer'
// import Header from './Header'

// export default function Api() {
//   return (
//     <div>

//     </div>
//   )
// }
import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Api.css';
import User from './User';

class Api extends Component {
  state = {
    responseData: null,
    loading: true,
  };
  async componentDidMount() {
    let url = 'https://reqres.in/api/users?page=1';
    let response = await fetch(url);
    let userData = await response.json();
    this.setState({ responseData: userData, loading: false });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <Header showSearch="false" />
        <div className="container-fluid">
          <div className="row">
            {this.state.loading === false ? (
              this.state.responseData.data.map((user) =>{       
                  return(<>
                    <User user={user} key={user.id}/>
                  </>)
                
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        {/* <p className='api'></p> */}
        <Footer />
        </>
    );
  }
}

export default Api;
