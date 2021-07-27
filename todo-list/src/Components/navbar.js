import React from 'react';
import { Navbar , Container } from 'react-bootstrap';

class NavBar extends React.Component {

    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand>
                        Todo Lists
                    </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default NavBar