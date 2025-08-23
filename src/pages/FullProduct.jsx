import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function FullProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    category: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    reviews: [],
    thumbnail: "",
    images: [],
  });
  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);
  console.log(product);
  return (
    <Container mt={"6"}>
      <Flex justify={"between"} gap={"3"}>
        <Flex direction={"column"} gap={"3"}>
          <img
            src={product.thumbnail}
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "400px",
              height: "400px",
              borderRadius: "var(--radius-2)",
            }}
          />
        </Flex>
        <Flex direction={"column"} gap={"3"} justify={"between"}>
          <Flex gap={"3"} direction={"column"}>
            <Flex justify={"between"}>
              <Heading>{product.title}</Heading>
              <Text>{product.category}</Text>
            </Flex>
            <Flex gap={"1"}>
              {product.tags.map((tag) => (
                <Badge color="green">{tag}</Badge>
              ))}
            </Flex>
            <Blockquote>{product.description}</Blockquote>
          </Flex>
          <Flex justify={"end"} align={"center"}>
            <Flex gap={"1"} align={"center"}>
              <Heading>${product.price}</Heading>
              <Button size={"3"}>Add to Cart</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Separator size={"4"} my={"4"} />
      <Flex justify={"between"} align={"center"}>
        <Heading mb={"4"}>Reviews</Heading>
        <Flex gap={"1"} align={"center"}>
          <Heading>Total: </Heading>
          <StarFilledIcon
            color="var(--accent-9)"
            style={{ width: "24px", height: "24px" }}
          />
          <Text size={"6"} style={{ color: "var(--accent-9)" }}>
            {product.rating}
          </Text>
        </Flex>
      </Flex>
      <Flex direction={"column"} gap={"3"}>
        {product.reviews.map((review) => (
          <Box maxWidth="400px">
            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  radius="full"
                  fallback={review.reviewerName[0]}
                />
                <Box width={"100%"}>
                  <Flex justify={"between"} align={"center"}>
                    <Text as="div" size="2" weight="bold">
                      {review.reviewerName}
                    </Text>
                    <Flex gap={"1"} align={"center"}>
                      <StarFilledIcon />
                      <Text>{review.rating}</Text>
                    </Flex>
                  </Flex>
                  <Text as="div" size="2" color="gray">
                    {review.comment}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
