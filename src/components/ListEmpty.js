import React, { memo } from 'react';

import {
    View,
    Text
} from 'react-native';

function ListEmpty({loading, message, ActivityIndicatorComponent, listMessageContainerStyle, listMessageTextStyle}) {
    return (
        <View style={listMessageContainerStyle}>
            {loading ? (
                <ActivityIndicatorComponent />
            ) : (
                <Text style={listMessageTextStyle}>
                    선택해 주세요.
                </Text>
            )}
        </View>
    )
}

export default memo(ListEmpty);