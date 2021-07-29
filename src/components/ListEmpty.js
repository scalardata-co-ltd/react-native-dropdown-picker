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
                    차량 정보를 추가해 주세요.
                </Text>
            )}
        </View>
    )
}

export default memo(ListEmpty);