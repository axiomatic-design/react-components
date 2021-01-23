import React from 'react';
import {
  theme,
  GlobalStyle,
  ThemeProvider,
  Box,
  Flex,
  Badge,
  Button,
  Icon,
  Link,
  Logo,
  Nav,
  Heading,
  Text,
  Eyebrow,
} from '@axiomatic/react-components';

const navItems = [
  {
    label: 'cats',
    href: '/cats',
  },
  {
    label: 'cats2',
    href: '/cats2',
    active: true,
  },
  {
    label: 'cats3',
    href: '/cats3',
  },
  {
    label: 'cats4',
    href: '/cats4',
  },
];

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flex padding={4} justifyContent="space-between" alignItems="center">
        <Logo />
        <Nav items={navItems} />
      </Flex>
      <Box as="main" padding={4}>
        <Box width={480} marginBottom={3}>
          <Box
            width={480}
            justifyContent="space-between"
            alignItems="center"
            paddingY={2}
          >
            <Eyebrow>Hello eyebrow</Eyebrow>
            <Heading>Such beautiful typo</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              suscipit arcu. Cras feugiat dapibus metus, sit amet varius libero
              gravida in. Donec ut <Link label="and a link!" href="#" /> porta
              elit, sed pellentesque turpis. Duis consectetur non nisl non
              aliquam. Ut diam quam, interdum in neque vitae, pharetra mattis
              orci.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              suscipit arcu. Cras feugiat dapibus metus, sit amet varius libero
              gravida in. Donec ut <Link label="and a link!" href="#" /> porta
              elit, sed pellentesque turpis. Duis consectetur non nisl non
              aliquam. Ut diam quam, interdum in neque vitae, pharetra mattis
              orci.
            </Text>
          </Box>
          <Eyebrow>Icons</Eyebrow>
          <Flex
            width={480}
            justifyContent="space-between"
            alignItems="center"
            paddingY={2}
          >
            <Icon name="music" />
            <Icon name="github" color="primary" />
            <Icon name="star" />
            <Icon name="alert-circle" />
            <Icon name="git-pull-request" />
            <Icon name="music" color="secondary" size="32px" />
          </Flex>
        </Box>
        <Eyebrow>Buttons</Eyebrow>
        <Flex width={480} justifyContent="space-between" paddingY={2}>
          <Button
            label="click me"
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="click me"
            disabled
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="click me"
            variant="outline"
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="click me"
            variant="outline"
            disabled
            onClick={() => {
              alert('cats!');
            }}
          />
        </Flex>
        <Flex width={480} justifyContent="space-between" paddingTop={3}>
          <Button
            label="Done"
            icon="check"
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="Done"
            icon="check"
            disabled
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="GitHub"
            icon="github"
            variant="outline"
            onClick={() => {
              alert('cats!');
            }}
          />
        </Flex>
        <Eyebrow>Badges</Eyebrow>
        <Flex width={480} justifyContent="space-between" paddingTop={3}>
          <Badge>Component</Badge>
          <Badge pill backgroundColor="navPill" color="navPillText">
            <Icon name="star" size="12px" marginRight={1} />
            1,524
          </Badge>
          <Badge>Component</Badge>
        </Flex>
      </Box>
    </ThemeProvider>
  );
}
