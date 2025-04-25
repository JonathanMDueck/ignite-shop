import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CardIcon = styled("div", {
  backgroundColor: "$gray800",
  cursor: "pointer",
  position: "relative",
  borderRadius: 6,
  height: "3rem",
  width: "3rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const CountCardItems = styled("div", {
  position: "absolute",
  top: "-0.5rem",
  right: "-0.5rem",

  width: "1.5rem",
  height: "1.5rem",
  outline: "3px solid $gray900",
  borderRadius: 999,
  backgroundColor: "$green500",
  color: "$white",
  fontSize: "$sm",
  fontWeight: "bold",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ShoppingCartContainer = styled("aside", {
  position: "absolute",
  width: "30rem",
  height: "100%",
  bottom: "0.25rem",
  left: "100",
  right: "0",
  backgroundColor: "$gray800",
  zIndex: 999,

  transition: "all 0.2s ease-in-out",
});

export const XIconContainer = styled("div", {
  position: "fixed",
  top: "1.5rem",
  right: "1.5rem",

  cursor: "pointer",
});

export const ShoppingCartItems = styled("div", {
  margin: "4.5rem 3rem",

  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  h2: {
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$white",
    lineHeight: "160%",
    marginBottom: "2rem",
  },
});

export const ShoppingCartItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
});

export const ImageContainer = styled("div", {
  width: "6.375rem",
  height: "5.8rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ShoppingCartItemDescription = styled("div", {
  lineHeight: "160%",

  span: {
    color: "$gray100",
    fontSize: "$md",
  },

  h1: {
    color: "$white",
    fontWeight: "bold",
    fontSize: "$md",
  },

  button: {
    background: "none",
    border: "none",
    fontWeight: "bold",
    color: "$green500",
    cursor: "pointer",
    fontSize: "1rem",

    "&:hover": {
      color: "$green300",
    },
  },
});
