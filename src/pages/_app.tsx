import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import Image from "next/image";
import { useState } from "react";
import handBagIcon from "../assets/handbag.svg";
import logoImg from "../assets/logo.svg";
import xIcon from "../assets/x-icon.svg";
import {
  CardIcon,
  Container,
  CountCardItems,
  Header,
  ImageContainer,
  ShoppingCartContainer,
  ShoppingCartItem,
  ShoppingCartItemDescription,
  ShoppingCartItems,
  XIconContainer,
} from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  function handleOpenShoppingCart() {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  }

  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
        <CardIcon onClick={handleOpenShoppingCart}>
          <img src={handBagIcon.src} alt="" />
          {true && <CountCardItems>1</CountCardItems>}
        </CardIcon>
      </Header>
      <ShoppingCartContainer
        css={
          isShoppingCartOpen
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(110%)" }
        }
      >
        <XIconContainer>
          <img onClick={handleOpenShoppingCart} src={xIcon.src} alt="" />
        </XIconContainer>

        <ShoppingCartItems>
          <h2>Sacola de compras</h2>
          <ShoppingCartItem>
            <ImageContainer>
              <Image
                src={
                  "https://files.stripe.com/links/MDB8YWNjdF8xUkJ3dEpRNDBuRE9IS0x3fGZsX3Rlc3RfcVZ1SVYwdlg4ejNhODFyNkxJWWZXOGpJ00NKhCvrVI"
                }
                alt=""
                width={94}
                height={94}
              />
            </ImageContainer>
            <ShoppingCartItemDescription>
              <span>Camiseta Beyond the limits</span>
              <h1>R$ 79,90</h1>
              <button>Remover</button>
            </ShoppingCartItemDescription>
          </ShoppingCartItem>
          <ShoppingCartItem>
            <ImageContainer>
              <Image
                src={
                  "https://files.stripe.com/links/MDB8YWNjdF8xUkJ3dEpRNDBuRE9IS0x3fGZsX3Rlc3RfcVZ1SVYwdlg4ejNhODFyNkxJWWZXOGpJ00NKhCvrVI"
                }
                alt=""
                width={94}
                height={94}
              />
            </ImageContainer>
            <ShoppingCartItemDescription>
              <span>Camiseta Beyond the limits</span>
              <h1>R$ 79,90</h1>
              <button>Remover</button>
            </ShoppingCartItemDescription>
          </ShoppingCartItem>
          <ShoppingCartItem>
            <ImageContainer>
              <Image
                src={
                  "https://files.stripe.com/links/MDB8YWNjdF8xUkJ3dEpRNDBuRE9IS0x3fGZsX3Rlc3RfcVZ1SVYwdlg4ejNhODFyNkxJWWZXOGpJ00NKhCvrVI"
                }
                alt=""
                width={94}
                height={94}
              />
            </ImageContainer>
            <ShoppingCartItemDescription>
              <span>Camiseta Beyond the limits</span>
              <h1>R$ 79,90</h1>
              <button>Remover</button>
            </ShoppingCartItemDescription>
          </ShoppingCartItem>
        </ShoppingCartItems>
      </ShoppingCartContainer>
      <Component {...pageProps} />
    </Container>
  );
}
