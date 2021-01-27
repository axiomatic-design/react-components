import React from 'react';
import { SubHeading, Text, Box, Flex, Icon, Button } from '../';

interface PackagePreviewProps {
  name: string;
  description: string;
  stars: number;
  version: string;
  repoLink: string;
  docsLink: string;
}

function PackagePreview({
  name,
  description,
  stars,
  version,
}: // repoLink, TODO: LinkButton
// docsLink,
PackagePreviewProps): JSX.Element {
  return (
    <Box marginBottom={3}>
      <Flex>
        <SubHeading ax={{ marginRight: 'auto' }}>{name}</SubHeading>
        <Text
          ax={{
            fontWeight: 'bold',
            fontSize: 1,
            alignItems: 'center',
            margin: 0,
          }}
        >
          <Icon name="star" size="16px" /> {stars}
        </Text>
        <Text
          ax={{
            fontWeight: 'bold',
            fontSize: 1,
            alignItems: 'center',
            margin: 0,
            marginLeft: 3,
          }}
        >
          <Icon name="git-pull-request" size="16px" /> {version}
        </Text>
      </Flex>
      <Text ax={{ marginBottom: 3 }}>{description}</Text>
      <Flex>
        <Button
          variant="outline"
          label="Documentation"
          ax={{ marginRight: 1 }}
          onClick={() => {
            alert('cats');
          }}
        />
        <Button
          variant="outline"
          icon="github"
          label="GitHub"
          onClick={() => {
            alert('cats');
          }}
        />
      </Flex>
    </Box>
  );
}

export { PackagePreview, PackagePreviewProps };
