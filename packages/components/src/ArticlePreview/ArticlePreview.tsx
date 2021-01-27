import React from 'react';
import { Box, Flex, Heading, Text, Image, Badge, Link } from '../';

interface ArticlePreviewProps {
  title: string;
  authorName: string;
  authorImage?: string;
  tags: string[];
  digest: string;
}

function ArticlePreview({
  title,
  authorName,
  authorImage,
  tags,
  digest,
}: ArticlePreviewProps): JSX.Element {
  return (
    <Box marginBottom={3}>
      <Heading sx={{ marginBottom: 1 }}>{title}</Heading>
      <Flex alignItems="center" marginBottom={2}>
        {authorImage && (
          <Image
            src={authorImage}
            sx={{
              width: 32,
              height: 32,
              borderRadius: 'pill',
              objectFit: 'contain',
              marginRight: 2,
              backgroundColor: 'imagePlaceholder',
            }}
          />
        )}
        <Text
          sx={{
            fontSize: 1,
            color: 'byline',
            lineHeight: 1,
            marginBottom: 0,
            marginRight: 3,
          }}
        >
          {authorName}
        </Text>
        {tags.map((tag) => (
          <Badge sx={{ marginRight: 1 }}>{tag}</Badge>
        ))}
      </Flex>
      <Text>{digest}</Text>
      <Text>
        <Link
          href="#"
          label="Read more"
          sx={{ fontWeight: 'bold', textDecoration: 'none' }}
        />
      </Text>
    </Box>
  );
}

export { ArticlePreview, ArticlePreviewProps };
