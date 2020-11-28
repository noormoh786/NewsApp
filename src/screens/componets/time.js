import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

export default function Time({time}) {
    const now = moment(time || moment.now()).fromNow()
    return (
        <View>
            <Text>{now}</Text>
        </View>
    )
}
