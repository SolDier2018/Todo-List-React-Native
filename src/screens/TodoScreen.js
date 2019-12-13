import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import {AppCard} from '../components/ui/AppCard';
import {THEME} from '../theme';
import {EditModal} from "../components/editModal";
import {AppTextBold} from "../components/ui/AppTextBold";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {

    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false)
    };

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <Button title={'Ред.'} onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title={'Назад'} color={THEME.GRAY_COLOR} onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title={'Удалить'} color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
});