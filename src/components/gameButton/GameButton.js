import React from "react";
import { Text, Pressable } from 'react-native';

const GameButton = (props) => {

    const handlecallback = () => {
        if (props.callback) {
            props.callback()
        }
    }

    return (

        <Pressable
            style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: props.width,
                    height: props.height,
                    borderColor: props.borderColor,
                    borderWidth: props.borderWidht,
                    borderRadius: props.width / 2,
                }
            }
            onPress={handlecallback}
        >
            <Text style={
                {
                    color: props.color,
                    fontSize: props.fontSize
                }
            }>
                {props.title}
            </Text>
        </Pressable>
    )

}

export default GameButton