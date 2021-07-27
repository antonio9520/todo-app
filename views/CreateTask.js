import React, {useState} from 'react';
import theme from '../theme';
import {TextInput, Select, Button, DatePicker} from '../components';
import styled from 'styled-components';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CreateTask = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePickerStart, setShowTimePickerStart] = useState(false);
  const [showTimePickerEnd, setShowTimePickerEnd] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    //   setFechaNacimientoError(false);
    //   setFechaNacimiento(currentDate ? currentDate : new Date());
    setShowDatePicker(false);
  };
  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    //   setFechaNacimientoError(false);
    //   setFechaNacimiento(currentDate ? currentDate : new Date());
    setShowTimePickerStart(false);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    //   setFechaNacimientoError(false);
    //   setFechaNacimiento(currentDate ? currentDate : new Date());
    setShowTimePickerEnd(false);
  };
  return (
    <Container>
      <Formulario>
        <Item>
          <Title>Title</Title>
          <TextInput placeholder="Design team meeting" />
        </Item>
        <Item>
          <Title>Deadline</Title>
          <DatePicker
            placeholder="2021-02-28"
            icon="keyboard-arrow-down"
            onPress={() => setShowDatePicker(true)}
          />
        </Item>
        <ItemTime>
          <ItemTimeLeft>
            <Title>Start time</Title>
            <DatePicker
              placeholder="11:00 Am"
              icon="access-time"
              onPress={() => setShowTimePickerStart(true)}
            />
          </ItemTimeLeft>
          <ItemTimeRight>
            <Title>End time</Title>
            <DatePicker
              placeholder="14:00 Pm"
              icon="access-time"
              onPress={() => setShowTimePickerEnd(true)}
            />
          </ItemTimeRight>
        </ItemTime>
        <Item>
          <Title>Remind</Title>
          <Select
            placeholder={{
              label: '10 minutes early',
              value: null,
              color: theme.COLORS.gray,
            }}
            items={[
              {label: '10 minutes early', value: '10 minutes early'},
              {label: '30 minutes early', value: '30 minutes early'},
              {label: '1 hour early', value: '1 hour early'},
              {label: '2 hours early', value: '2 hours early'},
              {label: '5 hours early', value: '5 hours early'},
            ]}
          />
        </Item>
        <Item>
          <Title>Repeat</Title>
          <Select
            placeholder={{
              label: 'Weekly',
              value: null,
              color: theme.COLORS.gray,
            }}
            items={[
              {label: 'Daily', value: 'Daily'},
              {label: 'Weekly', value: 'Weekly'},
              {label: 'Monthly', value: 'Monthly'},
              {label: 'Annual', value: 'Annual'},
            ]}
          />
        </Item>
      </Formulario>
      <ContainerBtnAdd>
        <Button color={theme.COLORS.success}>Create a task</Button>
      </ContainerBtnAdd>
      {showDatePicker && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
      {showTimePickerStart && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="time"
          display="default"
          onChange={onChangeStart}
          maximumDate={new Date()}
        />
      )}
      {showTimePickerEnd && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="time"
          display="default"
          onChange={onChangeEnd}
          maximumDate={new Date()}
        />
      )}
    </Container>
  );
};

export default CreateTask;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.white};
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

const Formulario = styled.ScrollView`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
`;

const Item = styled.View`
  height: 90px;
  justify-content: space-around;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const ItemTime = styled.View`
  flex-direction: row;
  height: 90px;
`;

const ItemTimeLeft = styled.View`
  flex: 1;
  padding-right: 5px;
  justify-content: space-around;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const ItemTimeRight = styled.View`
  flex: 1;
  padding-left: 5px;
  justify-content: space-around;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const ContainerBtnAdd = styled.View`
  height: 80px;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: center;
`;
