import React, {useState, useEffect} from 'react';
import theme from '../theme';
import styled, {css} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const DatePicker = props => {
  const {value, mode, icon, placeholder} = props;
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      if (mode === 'date') {
        setDateTime(
          date.getFullYear() +
            '-' +
            String(date.getMonth() + 1).padStart(2, 0) +
            '-' +
            String(date.getDate()).padStart(2, 0),
        );
      } else {
        let ampm = date.getHours() < 12 ? 'a.m' : 'p.m';
        setDateTime(
          String(date.getHours()).padStart(2, 0) +
            ':' +
            String(date.getMinutes()).padStart(2, 0) +
            ' ' +
            ampm,
        );
      }
    }
  }, [value, mode]);
  return (
    <Container {...props} underlayColor="transparent">
      <>
        {value ? (
          <Text>{dateTime}</Text>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
        {icon && <Icon name={icon} size={20} color={theme.COLORS.gray} />}
      </>
    </Container>
  );
};

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  mode: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default DatePicker;

const Container = styled.TouchableHighlight`
  background-color: ${theme.COLORS.lightGray2};
  padding: 13px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  ${props =>
    props.error &&
    css`
      border-width: 1px;
      border-color: ${theme.COLORS.red};
    `}
`;

const Placeholder = styled.Text`
  color: ${theme.COLORS.gray};
`;

const Text = styled.Text``;
