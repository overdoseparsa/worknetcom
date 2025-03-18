import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const links = [
  { title: "شبکه اکتیو", url: "/ActiveNetworkServices" },
  { title: "شبکه پسیو", url: "/PassiveNetworkService" },
  { title: "امنیت شبکه", url: "/NetworkSecurity" },
  { title: "وب", url: "/webService" },
  { title: "نرم افزار", url: "/webService" },
  { title: "مشاوره شبکه", url: "/networkConsulting" },
  { title: "خدمات بازرگانی", url: "/businessService" },
  { title: "active network", url: "/ActiveNetworkServices" },
  { title: "passive network", url: "/PassiveNetworkService" },
  { title: "network security", url: "/NetworkSecurity" },
  { title: "web development", url: "/webService" },
  { title: "application", url: "/webService" },
  { title: "network consultig", url: "/networkConsulting" },
  { title: "business service", url: "/businessService" },
];

export default function NavBar() {
  const [query, setQuery] = useState("");
  const filteredLink = links.filter((link) =>
    link.title.toLowerCase().includes(query.toLowerCase())
  );
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    if (query.length > 0) {
      setIsSearch(true);
    }
    else{
      setIsSearch(false)
    }
  }, [query]);
  const [scrolled, setScrolled] = useState(false);
  const [showCase, setShowCase] = useState(false);
  useEffect(() => {
    setShowCase(true);
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`customNavbar pb-2 pt-lg-3  ${scrolled ? "scrolled" : ""}`}
        fixed="top"
      >
        <Navbar.Brand
          as={NavLink}
          to={"/"}
          className="ms-lg-5 ms-3 pb-2 pt-0  navTitle fs-2"
        >
          <Image
            className="worknetLogo"
            src="image/worknetService2.png"
            fluid
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{
            width: "100%",
          }}
        >
          <Nav className="text-start navLink">
            <Nav.Link as={NavLink} to={"/"} className="navbarLink">
              صفحه اصلی
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/Services"} className="navbarLink">
              خدمات
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/ProductPage"} className="navbarLink">
              محصولات
            </Nav.Link>
          </Nav>
          <Container
            style={{ maxWidth: "0%" }}
            className="bg-primary"
          ></Container>
          <Nav>
            <Nav.Link
              as={NavLink}
              to={"/ContactForm"}
              className="ms-3 ms-lg-0 navbarLink"
            >
              تماس باما
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/AdminPanel"}
              className="ms-3 ms-lg-0 navbarLink"
            >
              پنل مدیریت
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جست وجو..."
              className="mx-3 mb-lg-0 mb-sm-3 mx-sm-0 searchForm"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ backgroundColor: "lightgray"
                ,
                width:250,
                height:40,
                marginTop:6
               }}
            />
            {isSearch && (
              <Container className="links">
                <ul className="linksUL">
                  {filteredLink.map((link, index) => (
                    <li key={index}>
                      <Link
                        onClick={() => {
                          setIsSearch(false);
                          setQuery("");
                        }}
                        to={link.url}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            )}
            <Button
              variant="outline-warning"
              className="me-5 mb-lg-0 mb-sm-3 fs-5"
              style={{
                height:40,
                marginTop:6,
                borderColor:'#d57e19',
                color:'#d57e19'
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
