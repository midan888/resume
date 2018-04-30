import React from 'react';
import withContent from '../content/withContent';
import Typography from '../Typography';
import SectionLabel from '../SectionLabel';
import PaddedBlock from '../PaddedBlock';

const Education = ({ i18n }) => (
  <div>
    <SectionLabel>{i18n('edu.title')}</SectionLabel>
    <PaddedBlock>
      <Typography>{i18n('edu.desc')}</Typography>
    </PaddedBlock>
  </div>
);

export default withContent(Education);
