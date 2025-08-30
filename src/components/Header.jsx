import { Card, Flex, Heading, IconButton, TabNav } from "@radix-ui/themes";
import React from "react";
import { Link, useLocation } from "react-router";
import Cart from "./Cart";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/themeReducer";

export default function Header() {
  const location = useLocation();
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  return (
    <Card>
      <Flex justify={"between"} align="center">
        <Heading>Fake Store</Heading>
        <TabNav.Root>
          <TabNav.Link asChild active={location.pathname === "/"}>
            <Link to={"/"}>Home</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={location.pathname === "/products"}>
            <Link to={"/products"}>Products</Link>
          </TabNav.Link>
          <Cart />
          <IconButton
            onClick={() => dispatch(changeTheme())}
            ml={"3"}
            style={{ position: "relative", top: "5px" }}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </TabNav.Root>
      </Flex>
    </Card>
  );
}
