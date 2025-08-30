import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Container,
  Flex,
  Grid,
  IconButton,
  RadioCards,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productsReducer";
import { setCategory, setSearch, setSort } from "../redux/slices/filterReducer";

const sortValues = {
  1: { sortBy: "id", order: "asc" },
  2: { sortBy: "price", order: "asc" },
  3: { sortBy: "price", order: "desc" },
  4: { sortBy: "rating", order: "desc" },
  5: { sortBy: "title", order: "asc" },
};

export default function Products() {
  const { products } = useSelector((store) => store.products);
  const { category, sort, search } = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    let url = "https://dummyjson.com/products";
    if (category) {
      url += `/category/${category}`;
    }
    url += `?sortBy=${sortValues[sort].sortBy}&order=${sortValues[sort].order}`;
    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data.products)));
  }, [category, sort, search]);

  return (
    <Container mt={"6"}>
      <Flex align={"center"} justify={"between"}>
        <Flex gap={"3"}>
          <Select.Root
            size="3"
            defaultValue="1"
            value={sort}
            onValueChange={(selectedSort) => dispatch(setSort(selectedSort))}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="1">Default</Select.Item>
              <Select.Item value="2">Price ↑</Select.Item>
              <Select.Item value="3">Price ↓</Select.Item>
              <Select.Item value="4">Rating</Select.Item>
              <Select.Item value="5">Title</Select.Item>
            </Select.Content>
          </Select.Root>
          <RadioCards.Root
            size={"1"}
            defaultValue=""
            columns={{ initial: "1", sm: "6" }}
            value={category}
            onValueChange={(selectedCategory) =>
              dispatch(setCategory(selectedCategory))
            }
          >
            <RadioCards.Item value="">
              <Text weight="bold">all</Text>
            </RadioCards.Item>
            <RadioCards.Item value="beauty">
              <Text weight="bold">beauty</Text>
            </RadioCards.Item>
            <RadioCards.Item value="furniture">
              <Text weight="bold">furniture</Text>
            </RadioCards.Item>
            <RadioCards.Item value="laptops">
              <Text weight="bold">laptops</Text>
            </RadioCards.Item>
            <RadioCards.Item value="mens-shirts">
              <Text weight="bold">mens-shirts</Text>
            </RadioCards.Item>
            <RadioCards.Item value="skin-care">
              <Text weight="bold">skin-care</Text>
            </RadioCards.Item>
          </RadioCards.Root>
        </Flex>
        <Flex gap={"1"}>
          <TextField.Root
            size={"3"}
            placeholder="Search the products…"
            value={search}
            onChange={(event) => dispatch(setSearch(event.target.value))}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <IconButton size={"3"} onClick={() => dispatch(setSearch(""))}>
            <Cross1Icon />
          </IconButton>
        </Flex>
      </Flex>
      <Grid columns="4" gap="3" rows="auto" width="auto" mt={"6"}>
        {products.map((el) => (
          <Product el={el} />
        ))}
      </Grid>
    </Container>
  );
}
