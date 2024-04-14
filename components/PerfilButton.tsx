import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface PerfilButtonProps {
    onPress: () => void;
    position?: { top?: number; right?: number };
    size?: number;
    backgroundColor?: string;
}

const PerfilButton: React.FC<PerfilButtonProps> = ({
    onPress,
    position = { top: 20, right: 20 },
    size = 45,
    backgroundColor = 'gray',
}) => {
    return (
        <TouchableOpacity
            style={{ position: 'absolute', ...position }}
            onPress={onPress}
        >
            <View
                style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                    backgroundColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Imagem do usuário */}
            </View>
        </TouchableOpacity>
    );
};

export default PerfilButton;