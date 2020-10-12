import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
          <div id="sidebar">
            <div className="user-profile">
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <h3>Ronald</h3>
                </div>
            </div>
            <div className="user-channels"></div>
          </div>
        );
    }
}
