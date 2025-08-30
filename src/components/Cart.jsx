import {
  ArchiveIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  IconButton,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  minusFromCart,
  removeFromCart,
} from "../redux/slices/cartReducer";

export default function Cart() {
  const { cartProducts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const totalPrice = cartProducts.reduce(
    (sum, el) => sum + el.price * el.count,
    0
  );
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button ml={"3"} style={{ position: "relative", top: "5px" }}>
          <ArchiveIcon />
          Cart
          {cartProducts.length > 0 && (
            <Box
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            >
              <Text style={{ color: "black" }}>{cartProducts.length}</Text>
            </Box>
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="650px">
        <Dialog.Title size={"6"}>Cart</Dialog.Title>

        <Flex direction="column" gap="3">
          {cartProducts.map((el) => (
            <Card>
              <Flex justify={"between"} align={"center"}>
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={el.thumbnail}
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {el.title}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      ${el.price}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={"2"} align={"center"}>
                  <IconButton
                    onClick={() => dispatch(minusFromCart(el))}
                    disabled={el.count === 1}
                  >
                    <MinusIcon />
                  </IconButton>
                  <Text>{el.count}</Text>
                  <IconButton onClick={() => dispatch(addToCart(el))}>
                    <PlusIcon />
                  </IconButton>
                  <IconButton
                    variant="outline"
                    onClick={() => dispatch(removeFromCart(el))}
                  >
                    <TrashIcon />
                  </IconButton>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
        <Separator size={"4"} my={"3"} />
        <Flex gap="3" mt="4" justify="between" align={"center"}>
          <Heading size={"4"}>Total Price: ${Math.round(totalPrice)}</Heading>
          <Flex gap={"3"}>
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>Purchase</Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
