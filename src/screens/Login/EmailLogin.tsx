import React, { useCallback, useContext, useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../constants/theme';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../contexts/AuthContext';

const wimetLogo = require('../../../assets/images/wimet-logo.png');

const INITIAL_VALUES = {
    email: '',
    password: '',
};

const emailValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Formato de email incorrecto')
        .required('El email es obligatorio'),
    password: yup.string().required('La contraseña es obligatoria'),
});

const EmailLogin = () => {
    const { login, error, loginCredentials } = useContext(AuthContext);

    const [hidePassword, setHidePassword] = useState<boolean>(true);

    const handleHidePassword = useCallback(
        () => setHidePassword((prev) => !prev),
        []
    );

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={wimetLogo} />
                </View>
                <View style={styles.form}>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        validationSchema={emailValidationSchema}
                        validateOnChange={false}
                        onSubmit={async (values) => login(values)}
                    >
                        {({
                            errors,
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <>
                                <Input
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    autoFocus={false}
                                    autoComplete="email"
                                    autoCapitalize="none"
                                    placeholder="Correo"
                                    theme="one-line"
                                    errorMsg={errors.email}
                                />
                                <Input
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    secureTextEntry={hidePassword}
                                    autoFocus={false}
                                    placeholder="Contraseña"
                                    theme="one-line"
                                    errorMsg={errors.password}
                                    rightIcon={
                                        <Ionicons
                                            name={
                                                hidePassword ? 'eye' : 'eye-off'
                                            }
                                            size={25}
                                            style={styles.eyeIcon}
                                            onPress={handleHidePassword}
                                        />
                                    }
                                />
                                {error && (
                                    <Text style={styles.errorMessage}>
                                        Ocurrió un error al hacer el login. Por
                                        favor, revise sus datos y vuelva a
                                        intentarlo
                                    </Text>
                                )}
                                <Button
                                    disabled={isSubmitting}
                                    text="Iniciar sesión"
                                    onPress={handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                    <Text style={styles.oAuthText}>o ingresá con</Text>
                    <View>
                        <Button
                            disabled={false}
                            text="Credenciales de tu empresa"
                            onPress={() => loginCredentials()}
                            theme="secondary"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EmailLogin;

const styles = StyleSheet.create({
    safeView: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.white,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        padding: 35,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 2,
    },
    inputText: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 12,
        fontSize: 18,
        color: theme.colors.darkBlue,
        fontFamily: 'apercu',
    },
    inputContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        color: theme.colors.lightGray,
        right: 0,
        top: 10,
    },
    errorMessage: {
        color: theme.colors.red,
        marginBottom: 15,
        fontSize: 16,
    },
    oAuthText: {
        fontSize: 18,
        color: theme.colors.gray,
        textAlign: 'center',
        paddingVertical: 22,
    },
});
