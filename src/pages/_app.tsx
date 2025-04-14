import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import handBagIcon from "../assets/handbag.svg";
import logoImg from "../assets/logo.svg";
import {
  CardIcon,
  Container,
  CountCardItems,
  Header,
} from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
        <CardIcon>
          <img src={handBagIcon.src} alt="" />

          {true && <CountCardItems>1</CountCardItems>}
        </CardIcon>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
