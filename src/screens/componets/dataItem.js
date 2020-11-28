import { Body, Button, Left, ListItem, Right, Thumbnail } from 'native-base'
import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Time from './time'

function DataItem({data,onPress})
{

    const handleView = () =>{
           const {url,title} = data
         return   onPress({url,title})
    }

    return(
        <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: data.urlToImage != null ? data.urlToImage : "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60.jpg"}} />
              </Left>
              <Body>
    <Text style={styles.title} numberOfLines={2} >{data.title}</Text>
    <Text style={styles.discription} note numberOfLines={2}>{data.description}</Text>
                <View style={styles.view}>
    <Text style={styles.name}>{data.source.name}</Text>
    <Time time={data.publishedAt} />
                </View>
              </Body>
              <Right>
                <Button style={styles.button} onPress={handleView}>
                  <Text style={{color:"#fff"}}>    View    </Text>
                </Button>
              </Right>
            </ListItem>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize:16,
    },
    discription:{
        opacity:0.5,
    },
    button:{
     
    },
    view:{
        marginTop:8
    }
})

export default DataItem;