import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, CheckBox} from '../components';
import theme from '../theme';
import styled from 'styled-components';

const Tasks = ({navigation}) => {
  return (
    <Container>
      <ScrollView>
        <View>
          <Title>Completed task</Title>
          <CheckBox />
        </View>
        <View>
          <Title>Pending Task</Title>
          <CheckBox />
        </View>
      </ScrollView>

      <ContainerBtnAdd>
        <Button
          color={theme.COLORS.success}
          onPress={() => navigation.navigate('addTask')}>
          Add task
        </Button>
      </ContainerBtnAdd>
    </Container>
  );
};

export default Tasks;

const Container = styled.View`
  background-color: ${theme.COLORS.white};
  flex: 1;
`;

const ContainerBtnAdd = styled.View`
  height: 80px;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;
