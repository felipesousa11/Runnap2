import React ,{useState, useEffect} from 'react';
import { Text, View, Image,Linking, TouchableOpacity,FlatList, Share } from 'react-native';
import { FontAwesome5, Entypo, FontAwesome,Fontisto,Feather,MaterialCommunityIcons,Ionicons   } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import { text } from 'body-parser';

export default function Feed ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');
    const [mostrar,setMostrar]= useState(true);

    useEffect(() =>{
        let ref = firebase.firestore().collection('desafios').onSnapshot(querySnapshot =>{
        const data = []
            querySnapshot.forEach(doc =>{
                data.push({
                    ...doc.data(),
                       key:doc.id
            })
        })
        setData(data)
    })
        return () => ref()
    }, [])

    Share.WhatsApp = text =>{
        Linking.openURL(`whatsapp://send?text=ola bom dia`)
    }
    return(    
        <View style={[styles.containerfeed, styles.containertop]}>
           <Menutopo title='Desafios' navigation={navigation}/>

           <FlatList
                    data={data}
                    renderItem={({item})=>(

                        <View>
                            <Image
                                source={require('../../assets/printmapa2.jpeg')}
                                style={styles.imgdesafios}
                            />
                                <Text style={styles.titleText}>Sextou com s de caminhar</Text>
                                <View style={styles.acoes}>
                                <TouchableOpacity
                                    onPress = {()=> setMostrar(!mostrar)}
                                >
                                    <View style={styles.boxuser}>
                                    <MaterialCommunityIcons name="location-enter" size={24} color="black" />
                                    <Text>Inscrever</Text>
                                    </View>
                                </TouchableOpacity>
                
                                <TouchableOpacity
                                    onPress={()=> Share.WhatsApp()}
                                >
                                    <View style={styles.boxuser}>
                                        <Feather name="share-2" size={24} color="black" />
                                        <Text>Compartilhar</Text>
                                    </View>
                                </TouchableOpacity>
                                        
                                </View>
                        </View>
                        
                        )}
                        />

        </View>
    );
}

