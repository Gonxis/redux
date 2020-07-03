import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class MyNavbar extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar variant="light" expand="lg" sticky="top">
                                <Navbar.Brand>
                                    ITEMS
                                </Navbar.Brand>
                            </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyNavbar;
