import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import Link from "next/link";
import { capitalizeFirstLetter } from "../../helper_functions/StringOperations"
import styles from "../../styles/Header.module.css";

function Header() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (currentUser.loggedIn) {
      var name =
        capitalizeFirstLetter(currentUser.user.user.first_name) +
        " " +
        capitalizeFirstLetter(currentUser.user.user.last_name);
      setUser(name);
    } else {
      setUser(null);
    }
  }, [currentUser]);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  const logout = () => {
    dispatch(allActions.userActions.logOut());
    Router.push("/");
  };

  return (
    <header>
      <Navbar bg="light" variant="light">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Access</Navbar.Brand>
          </Link>
          <Nav>
            {/* <Link href="/manage/events/create" passHref>
              <Nav.Link>
                <i className="fas fa-shopping-cart pr-1"></i> Create Event
              </Nav.Link>
            </Link> */}
            <Link href="/tickets/view" passHref>
              <Nav.Link>
                <i className="fas fa-shopping-cart pr-1"></i> My Tickets
              </Nav.Link>
            </Link>
            {!loading && !user ? (
              // <Link href="/login" passHref>
              <Link href="/login" passHref>
                <Nav.Link>Login</Nav.Link>
              </Link>
            ) : user ? (
              // </Link>
              <NavDropdown title={user} id="email">
                <Link href="/account" passHref>
                  <NavDropdown.Item>Account</NavDropdown.Item>
                </Link>
                <Link href="/manage/events" passHref>
                  <NavDropdown.Item>Manage Events</NavDropdown.Item>
                </Link>
                <Link href="/manage/events/create" passHref>
                  <NavDropdown.Item>Create Event</NavDropdown.Item>
                </Link>
                <NavDropdown.Item
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
