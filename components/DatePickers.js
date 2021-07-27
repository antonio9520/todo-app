import React from 'react';
import theme from '../theme';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.TouchableHighlight`
  background-color: ${theme.COLORS.lightGray2};
  padding: 13px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

const Placeholder = styled.Text`
  color: ${theme.COLORS.gray};
`;

const Text = styled.Text``;

const DatePicker = props => {
  return (
    <Container {...props} underlayColor="transparent">
      <>
        {props.value ? (
          <Text>{props.value}</Text>
        ) : (
          <Placeholder>{props.placeholder}</Placeholder>
        )}
        {props.icon && (
          <Icon name={props.icon} size={20} color={theme.COLORS.gray} />
        )}
      </>
    </Container>
  );
};

export default DatePicker;
