import { CopyIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Card,
  Code,
  Container,
  DataList,
  Flex,
  Heading,
  IconButton,
  Link,
  Tabs,
  Text,
} from "@radix-ui/themes";
import React from "react";

export default function Home() {
  return (
    <Container mt={"6"}>
      <Heading align={"center"}>Welcome to Fake Store!</Heading>
      <Tabs.Root defaultValue="about">
        <Tabs.List justify={"center"}>
          <Tabs.Trigger value="about">About</Tabs.Trigger>
          <Tabs.Trigger value="personal">Personal</Tabs.Trigger>
          <Tabs.Trigger value="contacts">Contacts</Tabs.Trigger>
        </Tabs.List>
        <Box pt="3">
          <Tabs.Content value="about">
            <Flex justify={"center"}>
              <Text size="2">
                The application is created with React. Using libraries such as
                RadixUi, ReactRouter. The server is on DummyJSON
              </Text>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="personal">
            <Flex justify={"center"} gap={"4"}>
              <Box maxWidth="240px">
                <Card>
                  <Flex gap="3" align="center">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="full"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                      </Text>
                      <Text as="div" size="2" color="gray">
                        Engineering
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box maxWidth="240px">
                <Card>
                  <Flex gap="3" align="center">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="full"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                      </Text>
                      <Text as="div" size="2" color="gray">
                        Engineering
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box maxWidth="240px">
                <Card>
                  <Flex gap="3" align="center">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="full"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                      </Text>
                      <Text as="div" size="2" color="gray">
                        Engineering
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="contacts">
            <Flex justify={"center"}>
              <DataList.Root>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Phone</DataList.Label>
                  <DataList.Value>
                    <Flex align="center" gap="2">
                      <Code variant="ghost">+793482347</Code>
                      <IconButton
                        size="1"
                        aria-label="Copy value"
                        color="gray"
                        variant="ghost"
                      >
                        <CopyIcon />
                      </IconButton>
                    </Flex>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Name</DataList.Label>
                  <DataList.Value>Vlad Moroz</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Email</DataList.Label>
                  <DataList.Value>
                    <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Company</DataList.Label>
                  <DataList.Value>
                    <Link target="_blank" href="https://workos.com">
                      WorkOS
                    </Link>
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
            </Flex>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Container>
  );
}
