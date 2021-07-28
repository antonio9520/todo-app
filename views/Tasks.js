import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, CheckBox} from '../components';
import theme from '../theme';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {getTasksAction} from '../redux/actions/taskActions';

const Tasks = ({navigation}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    dispatch(getTasksAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    separateTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  const separateTasks = () => {
    setCompletedTasks(tasks.filter(task => task.isComplete));
    setPendingTasks(
      tasks
        .filter(task => !task.isComplete)
        .sort(function (a, b) {
          a = new Date(a.created);
          b = new Date(b.created);
          return a > b ? -1 : a < b ? 1 : 0;
        }),
    );
  };

  return (
    <Container>
      <ScrollView>
        {!completedTasks[0] && !pendingTasks[0] && (
          <View>
            <Title>You do not have tasks</Title>
          </View>
        )}
        {completedTasks[0] && (
          <View>
            <Title>Completed Tasks</Title>
            {completedTasks.map((item, index) => (
              <CheckBox key={item.id} data={item} index={index} />
            ))}
          </View>
        )}
        {pendingTasks[0] && (
          <View>
            <Title>Pending Tasks</Title>
            {pendingTasks.map((item, index) => (
              <CheckBox key={item.id} data={item} index={index} />
            ))}
          </View>
        )}
      </ScrollView>

      <ContainerBtnAdd>
        <Button
          color={theme.COLORS.success}
          onPress={() => navigation.navigate('addTask')}>
          Add a Task
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
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${theme.COLORS.black};
`;

const ScrollView = styled.ScrollView`
  padding: 0 25px;
  margin-bottom: 80px;
`;
