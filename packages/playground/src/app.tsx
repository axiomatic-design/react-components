import React from 'react';
import {
  theme,
  GlobalStyle,
  ThemeProvider,
  Box,
  Flex,
  ArticlePreview,
  Badge,
  Button,
  Card,
  Hero,
  Icon,
  Image,
  Link,
  Logo,
  Nav,
  PackagePreview,
  Heading,
  SubHeading,
  Text,
  Eyebrow,
} from '@axiomatic/react-components';
import catImage from './assets/undraw_chilling_8tii.svg';
import intersect from './assets/intersect.svg';
import catFace from './assets/cat-face.jpg';

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

      <Flex>
        <Hero image={intersect} imagePosition="0 -50px" ax={{ width: 1030 }}>
          <Heading
            ax={{
              color: 'primaryText',
              fontSize: 7,
              fontFamily: 'body',
              fontWeight: 'bold',
              marginBottom: 4,
              letterSpacing: '-0.033em',
            }}
          >
            Design Systems
          </Heading>
          <SubHeading
            ax={{
              color: 'primaryText',
              marginBottom: 'auto',
            }}
          >
            The intersection of Design, Product, and Enginneering
          </SubHeading>
          <SubHeading
            ax={{
              color: 'primaryText',
              display: 'flex',
            }}
          >
            <Link
              href="#"
              ax={{
                color: 'primaryText',
                marginRight: 2,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'primaryTextHover',
                  marginRight: 3,
                },
              }}
            >
              Get started with an intro to Design Systems
            </Link>{' '}
            <Icon name="arrow-right" size="24px" />
          </SubHeading>
        </Hero>

        <Card marginX={3}>
          <SubHeading>This is a cat card</SubHeading>
          <Image src={catImage} alt="issa cat" width={175} margin="auto" />
          <Text ax={{ fontSize: 1 }}>
            Stay up to date with the latest articles, packages and updates, and
            industry news. You can expect one or two updates a month, and we’ll
            never spam or share your email.
          </Text>
          <Button
            label="Slappa da Like"
            onClick={() => {
              alert('cats');
            }}
          />
        </Card>
      </Flex>

      <Box width={768} marginTop={3} marginBottom={5} marginX="auto">
        <PackagePreview
          name="@axiomatic/floop"
          stars={312}
          version="v2.2.0"
          link="#"
          repoLink="#"
          docsLink="#"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            suscipit arcu. Cras feugiat dapibus metus, sit amet varius libero
            gravida in."
        />

        <ArticlePreview
          title="What a fun title to have"
          authorImage={catFace}
          authorName="Cats McGee"
          link="#"
          tags={['woop', 'deshloop']}
          digest="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            suscipit arcu. Cras feugiat dapibus metus, sit amet varius libero
            gravida in."
        />

        <Box>
          <Eyebrow>Hello eyebrow</Eyebrow>
          <Heading>Such beautiful typo</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            suscipit arcu. Cras feugiat dapibus metus, sit amet varius libero
            gravida in. Donec ut <Link href="#">and a link</Link> porta elit,
            sed pellentesque turpis. Duis consectetur non nisl non aliquam. Ut
            diam quam, interdum in neque vitae, pharetra mattis orci.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            suscipit arcu. Cras feugiat dapibus metus, sit amet varius libero
            gravida in. Donec ut <Link href="#">and a link</Link> porta elit,
            sed pellentesque turpis. Duis consectetur non nisl non aliquam. Ut
            diam quam, interdum in neque vitae, pharetra mattis orci.
          </Text>
        </Box>
        <Eyebrow ax={{ paddingY: 3 }}>Icons</Eyebrow>
        <Flex justifyContent="space-between" alignItems="center">
          <Icon name="music" />
          <Icon name="github" color="primary" />
          <Icon name="star" />
          <Icon name="alert-circle" />
          <Icon name="git-pull-request" />
          <Icon name="music" color="secondary" size="32px" />
        </Flex>

        <Eyebrow ax={{ paddingY: 3 }}>Buttons</Eyebrow>
        <Flex justifyContent="space-between">
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
        <Flex justifyContent="space-between" paddingTop={3}>
          <Button
            label="Done"
            iconLeft="check"
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="Done"
            iconRight="navigation"
            disabled
            onClick={() => {
              alert('cats!');
            }}
          />
          <Button
            label="GitHub"
            iconLeft="github"
            iconRight="pen-tool"
            variant="outline"
            onClick={() => {
              alert('cats!');
            }}
          />
        </Flex>
        <Eyebrow ax={{ paddingY: 3 }}>Badges</Eyebrow>
        <Flex justifyContent="space-between" alignItems="center">
          <Badge>Component</Badge>
          <Badge pill backgroundColor="navPill" color="navPillText">
            <Icon name="star" size="12px" marginRight={1} />
            1,524
          </Badge>
          <Badge>Component</Badge>
          <Badge ax={{ padding: 3 }}>Component</Badge>
        </Flex>
      </Box>
    </ThemeProvider>
  );
}
