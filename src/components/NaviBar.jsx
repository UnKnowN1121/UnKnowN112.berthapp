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
    <>
      <Navbar expand="lg" variant="white">
        <Layout className="left-nav-bar">
          <NavbarBrand href="/">Bertha's</NavbarBrand>

          <NavbarToggle variant="custom" aria-controls="nav-bar" />

          <NavbarCollapse id="nav-bar">
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop">Order Online</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Layout>

        <div className="cartCount">
          <NavLink href="/cart" className="floating-cart-icon">
            <span className="fa fa-shopping-cart"></span>
            <span> | </span>
            <span className="">{totalItems}</span>
          </NavLink>
        </div>
      </Navbar>
    </>
  );
};

export default NaviBar;
