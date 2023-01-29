import { forwardRef, ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export type InputSelectSkeletonProps = {
    label: string;
    children?: ReactElement;
    onPress?: () => void;
    disabled?: boolean;
    isSelected?: boolean;
};

const InputSelectSkeleton = forwardRef<
    TouchableOpacity,
    InputSelectSkeletonProps
>(({ label, children, onPress, disabled, isSelected = false }, ref) => {
    return (
        <TouchableOpacity
            ref={ref}
            style={styles(disabled).button}
            onPress={onPress}
            disabled={disabled}
        >
            <>
                {children && children}
                <Text style={styles(disabled).buttonText}>{label}</Text>
                <Ionicons
                    style={styles(disabled).icon}
                    name={
                        !isSelected
                            ? 'chevron-down-outline'
                            : 'chevron-up-outline'
                    }
                    size={26}
                />
            </>
        </TouchableOpacity>
    );
});

export default InputSelectSkeleton;
