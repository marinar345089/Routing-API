import {
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../redux/slices/cartReducer";

export default function Product({ el }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Link to={`/product/${el.id}`}>
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={el.thumbnail}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "contain",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
      </Link>
      <Flex direction={"column"} gap={"2"} justify={"between"} height={"190px"}>
        <Flex direction={"column"} gap={"2"}>
          <Heading size={"3"}>{el.title}</Heading>
          <Text
            size={"2"}
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: "5",
              WebkitBoxOrient: "vertical",
            }}
          >
            {el.description}
          </Text>
        </Flex>
        <Flex gap={"2"} align={"end"} justify={"between"}>
          <Button
            onClick={() => dispatch(addToCart(el))}
            style={{ width: "60%" }}
          >
            Add to Cart
          </Button>
          <Heading size={"4"} style={{ whiteSpace: "nowrap" }}>
            {el.price} $
          </Heading>
        </Flex>
      </Flex>
    </Card>
  );
}
