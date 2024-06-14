import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, Image } from "react-native";
import demoService from '../services/demoService'
import { User } from '../types/user.type'

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [data,  setData] = useState<User | undefined>(undefined);

    useEffect(() => {
        handleLoad()
    }, [])

    useEffect(() => {
        console.log({data})

    }, [data])

    const handleLoad = async () => {
        setLoading(true)
        const _data = await demoService()
        setData(_data)
        setLoading(false)
    };

    if (loading || !data) {
        return (
            <View style={styles.mainContainer}>
                <ActivityIndicator/>
            </View>
        );
    }

    return (
        <ImageBackground source={require('../assets/FaizBackGround.jpg')} style={styles.backgroundImage}>
            <View style={styles.mainContainer}>
                <View style={styles.homeContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/faizlogo.png')} style={styles.logo} />
                    </View>
                    <Text style={styles.homeTitle}>{data?.address?.address}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeContainer: {//Card que contiene la info del fetch
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: 300,
        borderRadius: 10,
        shadowColor: '#de1414',
        shadowOpacity: 1.0,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
    },
    homeTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default HomePage;
