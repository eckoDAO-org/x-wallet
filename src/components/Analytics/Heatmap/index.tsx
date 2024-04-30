import React from 'react';
import styled from 'styled-components';
import PortfolioValueChart from '../PortfolioValueChart';
import TimeSelector from '../TimeSelector';
import { LabeledContainer } from '../UI';

const Container = styled.div`
  width: 100%;
  height: 450px;
`;

const Heatmap = () => (
  <LabeledContainer label="HEATMAP">
    <Container>
      WIP
    </Container>
    <TimeSelector />
  </LabeledContainer>
);

export default Heatmap;
