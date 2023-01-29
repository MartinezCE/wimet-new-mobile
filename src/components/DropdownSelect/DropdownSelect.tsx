import { useRef, useState, RefObject, useCallback } from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    Modal,
    View,
    Platform,
} from 'react-native';
import InputSelectSkeleton from '../InputSelectSkeleton';
import styles from './styles';

export interface DropdownSelectItem {
    label: string;
    value: string | number | Date;
}

export type DropdownSelectProps = {
    selected?: DropdownSelectItem | null;
    placeholder: string;
    disabled?: boolean;
    data?: Array<DropdownSelectItem>;
    onSelect: (item: any) => void;
};

const DropdownSelect = ({
    selected,
    placeholder,
    disabled,
    data = [],
    onSelect,
}: DropdownSelectProps) => {
    const DropdownButton: RefObject<TouchableOpacity> = useRef(null);

    const [visible, setVisible] = useState<boolean>(false);
    const [dropdownPosition, setDropdownPosition] = useState({});

    const toggleDropdown = () => {
        !visible && handleDropdownPosition();
        setVisible((prev) => !prev);
    };

    const handleDropdownPosition = useCallback(() => {
        DropdownButton?.current?.measure(
            (
                _fx: number,
                _fy: number,
                _w: number,
                h: number,
                _px: number,
                py: number
            ) => {
                24;
                setDropdownPosition({
                    top: py + h - (Platform.OS === 'ios' ? 1 : 24),
                    left: _px,
                    width: _w,
                });
            }
        );
    }, []);

    const onItemPress = (item: DropdownSelectItem) => {
        onSelect(item);
        setVisible(false);
    };

    const renderItem = ({
        item,
        index,
    }: {
        item: DropdownSelectItem;
        index: number;
    }) => (
        <TouchableOpacity
            style={[
                styles.itemContainer,
                index !== data.length - 1 && styles.itemSeparator,
            ]}
            onPress={() => onItemPress(item)}
        >
            <Text style={styles.item}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <InputSelectSkeleton
            label={selected?.label || placeholder}
            ref={DropdownButton}
            onPress={!disabled ? toggleDropdown : () => {}}
            disabled={disabled}
            isSelected={visible}
        >
            <Modal visible={visible} transparent animationType="none">
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={[styles.dropdown, dropdownPosition]}>
                        <FlatList
                            style={styles.dropdownOptionsBox}
                            data={data}
                            renderItem={({ item, index }) =>
                                renderItem({ item, index })
                            }
                            keyExtractor={(_, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </InputSelectSkeleton>
    );
};

export default DropdownSelect;
