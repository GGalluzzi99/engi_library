import React from "react";
import { TextInput } from 'react-native';

const NameInput = (props) => {

    const handlecallback = (e) => {
        if (props.callback) {
            props.callback(e)
        }
    }

    return (

        <TextInput style={
            {
                width: props.width,
                height: props.height,
                borderWidth:props.borderWidth,
                borderColor:props.borderColor,
                borderRadius:2,
                padding:props.padding,
                outline:'none',
            }
        }
            placeholder={props.placeholder}
            onChangeText={handlecallback}

        />

    )

}

export default NameInput