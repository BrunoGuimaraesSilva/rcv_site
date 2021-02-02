import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstaIcon from "@material-ui/icons/Instagram";
import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import Routes from '../components/Routes'

const footerData = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "/facebook",
  },
  {
    label: "Instagram",
    icon: InstaIcon,
    href: "/Instagram",
  },
];
const headersData = [
  {
    label: "Geradores",
    href: "/geradores",
  },
  {
    label: "Peças",
    href: "/pecas",
  },
  {
    label: "Corretora",
    href: "/corretora",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];


export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Header headersData={headersData} />
        <Container>
          <Routes />
        </Container>
        <Footer
          title="Footer"
          social={footerData}
          description="RCV - Connecting Business"
        />
      </React.Fragment>
    </BrowserRouter>
  );
}
