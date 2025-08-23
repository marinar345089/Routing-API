import { Card, Flex, Heading, TabNav } from "@radix-ui/themes";
import React from "react";
import { Link, useLocation } from "react-router";
import Cart from "./Cart";

export default function Header() {
  const location = useLocation();
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
        </TabNav.Root>
      </Flex>
    </Card>
  );
}
