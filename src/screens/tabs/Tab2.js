import React, {  useState ,useEffect } from 'react';
import { Container,Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Tab } from 'native-base';
import {Alert } from 'react-native';
import axios from 'axios';
import DataItem from '../componets/dataItem'
import Model from '../componets/Model'

 
 function Tab1() { 

    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState(null);
    const [model,setModel] = useState(false);
    const [articleData,setAtricleData] = useState({})

    const handleItemData =(modelArticleData)=>{
      setModel(true),
      setAtricleData(modelArticleData)
    }

    const handleClose = ()=>{
      setModel(false),
      setAtricleData({})
    }

    useEffect(() => {
     async function getArticles(){
        const article = await axios.get('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d407319c03d42c5acc72467b04596ca');
        setData(article.data.articles);
        setLoading(false)
    }
    getArticles()
     }, [])


    return (
      <Container>
        <Content>
          <List
           dataArray = {data} 
           renderRow={(item)=>{
             return <DataItem data={item} onPress={handleItemData}/>
           }}
          />
        </Content>
        <Model
        showModel={model} 
        articleData={articleData}
        onClose={handleClose}
        
        />
      </Container>
    );
  }


  export default Tab1;