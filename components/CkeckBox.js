import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components';

const CkeckBox = props => {
  return (
    <Container>
      <CheckBox
      // value={toggleCheckBox}
      // onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Descripcion>un Check</Descripcion>
    </Container>
  );
};

export default CkeckBox;

const Container = styled.View`
  flex-direction: row;
`;

const Descripcion = styled.Text``;
