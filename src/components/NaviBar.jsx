import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Layout from "./Layout";
import "./Navi.css";
import { useCart } from "react-use-cart";

const NaviBar = () => {
  const { totalItems } = useCart();

  return (
    <Navbar expand="lg" variant="white" className="sticky-top">
      <Layout>
        <NavbarBrand href="/">Bertha's Chocolate Factory</NavbarBrand>
        <div>
          <a href="/cart" className="mr-auto">
            <i className="fa fa-shopping-cart"></i>
            <i className="strong">{totalItems}</i>
          </a>
        </div>

        <NavbarToggle aria-controls="nav-bar" />

        <NavbarCollapse id="nav-bar">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Order Online</NavLink>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Layout>
    </Navbar>
  );
};

export default NaviBar;
