import React, { Component } from 'react';
import './OldHistory.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class OldHistory extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div style={{ overflowX: 'hidden' }}>
                <Header />
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6" >
                        </div>
                        <div className="col-md-6" >
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default OldHistory;