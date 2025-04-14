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
