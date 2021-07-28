import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import theme from '../theme';
import {toogleTaskAction} from '../redux/actions/taskActions';
import PropTypes from 'prop-types';

const CkeckBox = ({data, index}) => {
  const dispatch = useDispatch();
  const {title, isComplete, id} = data;

  const [value, setValue] = useState(isComplete);
  const toogleCheckBox = newValue => {
    dispatch(toogleTaskAction(id, newValue));
    setValue(newValue);
  };

  return (
    <Container>
      <CheckBox
        disabled={value}
        value={value}
        tintColors={{
          true: isComplete && theme.COLORS.red,
          false: colors[Number(index.toString().slice(-1))],
        }}
        onValueChange={newValue => toogleCheckBox(newValue)}
      />

      <Descripcion>{title}</Descripcion>
    </Container>
  );
};

CheckBox.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default CkeckBox;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Descripcion = styled.Text`
  margin-left: 10px;
`;

const colors = [
  theme.COLORS.orange,
  theme.COLORS.yellow,
  theme.COLORS.lightBlue,
  theme.COLORS.orange,
  theme.COLORS.yellow,
  theme.COLORS.lightBlue,
  theme.COLORS.orange,
  theme.COLORS.yellow,
  theme.COLORS.lightBlue,
  theme.COLORS.orange,
];
