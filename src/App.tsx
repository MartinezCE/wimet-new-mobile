import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import useCachedResources from './hooks/useCachedResources';
import { AuthProvider } from './contexts/AuthContext';
import {DripsyProvider} from 'dripsy'
import AppNav from './navigation/AppNav';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
const theme = {
}
const App = () => {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AuthProvider>
                <DripsyProvider theme={theme}>
                    <SafeAreaProvider>
                        <RootSiblingParent>
                            <AppNav />
                            <StatusBar />
                        </RootSiblingParent>
                    </SafeAreaProvider>
                </DripsyProvider>
            </AuthProvider>
        </GestureHandlerRootView>
    );
};

export default App;
