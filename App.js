import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import {NavBar} from './src/components/NavBar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    if(!isReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onError={err => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }]);
    };

    const removeTodo = id => {
        const titleTodo = todos.find((t) => t.id === id);
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${titleTodo.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(todo => todo.id !== id));
                    }
                },
            ],
            {cancelable: false},
        );

    };

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if(todo.id === id) {
                todo.title = title
            }
            return todo;
        }))
    };

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            openTodo={(id) => setTodoId(id)}
        />);

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId);
        content =
            <TodoScreen
                goBack={() => setTodoId(null)}
                todo={selectedTodo}
                onRemove={removeTodo}
                onSave={updateTodo}
            />
    }

    return (
        <View>
            <NavBar title={'Todo List'}/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});

