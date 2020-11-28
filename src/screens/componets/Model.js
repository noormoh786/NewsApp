import React from 'react'
import { View, Text, Dimensions,Modal,Share} from 'react-native'
//import  WebView  from 'react-native-webview';
import {Container,Header,Content,Body,Left,Icon,Right, Button, Title }  from 'native-base'
import WebView from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height -56;

export default function Model({showModel,articleData,onClose}) {
    
    let url = articleData.url
   
    const handleClose = () =>{
        return onClose()
    }

    const handleShare = () =>{
        let {url,title} = articleData
        let message = `${title}\n\nRead more @ ${url} \n Created by Mohi`;
        return Share.share({
            title,message,url:message},
            {
                dialogTitle:`Share ${title}`
            }
        )
    }

    return (
        <View>
      <Modal 
      animationType="slide" 
      transparent
      visible={showModel}
      onRequestClose={handleClose}
      >
          <Container style={{margin:15,marginBottom:0,backgroundColor:"#fff"}}>
              <Header style={{backgroundColor:'#1f1c21'}}>
                  <Left>
                      <Button onPress={handleClose}>
                          <Icon name="close" style={{color:"white",fontSize:12}}/>
                      </Button>
                  </Left>
    <Body ><Title children={articleData.title} style={{color:"white",fontSize:15}} /></Body>
                  <Right>
                  <Button onPress={handleShare}>
                          <Icon name="share" style={{color:"white",fontSize:12}}/>
                      </Button>
                  </Right>
              </Header>
              <Content contentContainerStyle={{height:webViewHeight,flexGrow:1}}>
                <WebView source={{uri:url}} style={{flex:1}} onError={handleClose} startInLoadingState scalesPageToFit />
              </Content>
          </Container>
      </Modal>
        </View>
    )

}
