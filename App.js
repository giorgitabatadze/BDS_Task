import {StyleSheet} from 'react-native';
import React from 'react';
import MyNavigation from "./src/navigation/navigatoin";

export default function App() {
    return (
        <>
            <MyNavigation />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
