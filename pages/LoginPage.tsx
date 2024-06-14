import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator, ImageBackground } from "react-native";
import useAuth from "../hooks/useAuth"; // Importación del hook useAuth para manejar la autenticación

function LoginPage() {
    const [username, setUsername] = useState<string>(''); // Estado para almacenar el nombre de usuario
    const [password, setPassword] = useState<string>(''); // Estado para almacenar la contraseña

    const { login, loading } = useAuth(); // Desestructuración del hook useAuth para obtener la función de login y el estado de carga

    const handleLogin = async () => { // Función asincrónica para manejar el inicio de sesión
        await login(username, password); // Llama a la función de login pasando el nombre de usuario y contraseña
    };

    if (loading) { // Si está cargando la autenticación
        return (
            <View style={styles.mainContainer}>
                <ActivityIndicator /> // Muestra un indicador de carga
            </View>
        );
    }

    return (
        <ImageBackground source={require('../assets/FaizBackGround.jpg')} style={styles.backgroundImage}>
            <View style={styles.mainContainer}>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginTitle}>Welcome!</Text> {/* Título de bienvenida */}
                    <View style={styles.loginInnerContainer}>
                        <Text style={styles.loginText}>Username</Text> {/* Etiqueta para el campo de usuario */}
                        <TextInput
                            style={styles.loginInput}
                            onChangeText={setUsername}
                            placeholder="Enter username" // Placeholder del campo de usuario
                            placeholderTextColor="#FFFFFF" // Color del texto del placeholder en blanco
                        />
                    </View>
                    <View style={styles.loginInnerContainer}>
                        <Text style={styles.loginText}>Password</Text> {/* Etiqueta para el campo de contraseña */}
                        <TextInput
                            style={styles.loginInput}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="Enter password" // Placeholder del campo de contraseña
                            placeholderTextColor="#FFFFFF" // Color del texto del placeholder en blanco
                        />
                    </View>
                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text> {/* Botón de inicio de sesión */}
                    </TouchableOpacity>
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
    loginContainer: {//Card que tiene todos los espacios para el user input
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo semi-transparente negro
        padding: 20,
        width: 300,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 1.0,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        alignItems: 'center', // Centra el contenido horizontalmente
        position: 'relative', // Posición relativa para permitir posicionamiento absoluto de elementos hijos
    },
    loginInnerContainer: {
        marginVertical: 10,
        width: '100%',
    },
    loginTitle: {//Titulo del login page
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFF', // Texto blanco
        textAlign: 'center',
        marginBottom: 20,
    },
    loginText: {//Texto de titulo espacios para user input
        fontSize: 18,
        color: '#FFF', // Texto blanco
        marginBottom: 5,
    },
    loginInput: {//Input del usuario
        backgroundColor: '#000', // Fondo negro
        borderRadius: 5,
        padding: 10,
        borderColor: '#de1414',
        borderWidth: 6,
        width: '100%',
        fontSize: 16,
        color: '#FFF', // Texto blanco
    },
    loginButton: {//Boton
        marginTop: 20,
        backgroundColor: '#de1414',
        borderRadius: 5,
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginPage;
