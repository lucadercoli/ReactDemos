import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, NavLink as RRNL } from 'react-router-dom';

export default class NavigationBar extends Component<any, any> {
    navInactiveStyle: any = { "color": "white" };
    navActiveStyle: any = { "color":"steelblue" };

    constructor (props: any) {
        super(props);
        
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

  render() {
    return (
        <header>
            <Navbar dark className="navbar-expand-sm navbar-toggleable-sm bg-dark ng-white border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={RRNL} to="/">
                        <img src="images/logo.jpg" />&nbsp;Help Desk System
                        &nbsp;<span className="navUsername">({process.env.REACT_APP_USERNAME})</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink exact tag={RRNL} to="/" style={this.navInactiveStyle} activeStyle={this.navActiveStyle}>
                                    <i className="fa fa-home"></i>&nbsp;Home
                                </NavLink>
                            </NavItem>
                                <NavItem>
                                <NavLink exact tag={RRNL} to="/ticketlist" style={this.navInactiveStyle} activeStyle={this.navActiveStyle}>
                                    <i className="fa fa-table"></i>&nbsp;Tickets List
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRNL} to="/about" style={this.navInactiveStyle} activeStyle={this.navActiveStyle}>
                                    <i className="fa fa-info-circle"></i>&nbsp;About
                                </NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    )
  }
}
