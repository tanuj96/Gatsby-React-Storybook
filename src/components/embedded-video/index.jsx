import React from 'react';
import '../../styles.scss';
import { Container } from '@material-ui/core';

export default function EmbeddedVideo({ data }) {
  return (
    <Container>
      <div className="iframe-container">
        <div dangerouslySetInnerHTML={{ __html: data.embeddedUrl.embeddedUrl }} />
      </div>
    </Container>
  );
}
