import React from "react";
import { View, Text } from 'react-native'


const GameList = (props) => {

    return (

        <View style={
            {
                width: props.width,
                backgroundColor: props.backgroundColor,
                padding: props.padding,
                borderColor: props.borderColor,
                borderWidth: props.borderWidth,
                borderRadius: 5,
            }
        }>
            <Text style={
                {
                    fontSize: props.fontSizeTitle,
                    color: props.colorTitle,
                    textAlign:'center'
                }
            }>
                {props.title}
            </Text>
            {
                props.data.map((item, key) => {
                    return (
                        <View style={
                            {
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center',
                                flexDirection:'row',
                                padding:5
                            }
                        }
                            key={key}

                        >

                            <Text style={
                                {
                                    fontSize: props.fontSize,
                                    color: props.color
                                }
                            }
                            >{item.name}
                            </Text>

                            <Text style={
                                {
                                    fontSize: props.fontSize,
                                    color: props.color
                                }
                            }
                            >{item.score}
                            </Text>

                        </View>
                    )
                })
            }
        </View>


    )

}

export default GameList