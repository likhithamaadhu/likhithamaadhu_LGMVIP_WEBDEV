import Users from "./components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h2>Let's Grow More</h2>
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <footer class="footer">
        <div class="footer__addr">
         <h1 class="footer__logo">LGM-VIP</h1>
         <h2>Contact:</h2>
         <h2 class="contact__details">040-5481615</h2>
    
          
         </div>
  
      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Audio</a>
            </li>

            <li>
              <a href="#">Videos</a>
            </li>
                
            <li>
              <a href="#">Pictures</a>
            </li>
          </ul>
        </li>
        
        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Technology</h2>
          
          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#">Hardware Design</a>
            </li>
            
            <li>
              <a href="#">Software Design</a>
            </li>
            
            <li>
              <a href="#">Digital Signage</a>
            </li>
            
            <li>
              <a href="#">Data Science</a>
            </li>
            
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            
            <li>
              <a href="#">IoT</a>
            </li>
          </ul>
        </li>
        
        <li class="nav__item">
          <h1 class="nav__title">Legal</h1>
          
          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            
            <li>
              <a href="#">Terms of Use</a>
            </li>
            
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
      
      <div class="legal">
        <p>&copy; 2021 Let's Grow More. All rights reserved.</p>
        
        <div class="legal__links">
          <span>Made by <u><b>Likhitha Maadhu</b></u> with <span class="heart">♥</span></span>
        </div>
      </div>
    </footer>
          </>
        );
      }
    }

    export default App;
