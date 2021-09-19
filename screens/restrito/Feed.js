import React ,{useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity,FlatList, Modal } from 'react-native';
import { FontAwesome5, AntDesign ,Feather,MaterialCommunityIcons,Ionicons   } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import Atividade from './Atividade';

export default function Feed ({ navigation }){

    const [atividade, setAtividade] = useState(false);

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection('atividades').onSnapshot(querySnapshot =>{
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

   
    return(    
        <View style={[styles.containerfeed, styles.containertop]}>
           <Menutopo title='Feed' navigation={navigation}/>
            <View style={{paddingLeft:10}}>
                <TouchableOpacity
                        onPress={() =>{setAtividade(!atividade);}}
                        style={styles.btnDark}
                >
                <AntDesign name="pluscircle" size={50} color="red" />
                </TouchableOpacity>
            </View>
           <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <View style={{shadowColor:'black', marginBottom:10, backgroundColor:'#fff',shadowColor: '#470000',
                        shadowOffset: {width: 1, height: 2},
                        shadowOpacity: 0.2,
                        elevation: 3,}}>

                            <View style={styles.boxuser}>
                                <Image
                                    source={require('../../assets/perfil.png')}
                                    style={styles.imgprofile}

                                />
                                <View >
                                    <Text style={styles.txtTitulo}>Rodrigo Sena</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <FontAwesome5 name="running" size={15} color="black" style={{paddingRight:5}}/>
                                        <Text >{item.dia}/{item.mes}/{item.ano}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',paddingLeft:15,paddingRight:15,}}>
                                <Text style={styles.txtTitulo}>{item.nome}</Text>
                            </View>
                            <View style={styles.box}>
                                    <View style={{paddingRight:20}}>
                                        <Text style={{fontSize:12, paddingRight:25 }}>Elevação</Text>
                                        <Text style={styles.txtInfor}>15 m</Text>
                                    </View>

                                    <View style={{paddingRight:20}}>
                                        <Text style={{fontSize:12, paddingRight:25}}>Distância</Text>
                                        <Text style={styles.txtInfor}>{item.distancia} km</Text>
                                    </View>
                                    
                                    <View style={{paddingRight:20}}>
                                        <Text style={{fontSize:12, paddingRight:25}}>Tempo</Text>
                                        <Text style={styles.txtInfor}>{item.hora}:{item.minuto}:{item.segundo}</Text>
                                    </View>
                                </View>
                                <Image
                            source={require('../../assets/printmapa2.jpeg')}
                            style={styles.img}
                            />
                                <View style={styles.acoes}>
                                <TouchableOpacity>
                                    <View style={styles.boxuser}>
                                        <Ionicons name="heart-outline" size={24} color="black" />
                                        <Text>Apoiar</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.boxuser}>
                                        <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                                        <Text>Comentar</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.boxuser}>
                                        <Feather name="share-2" size={24} color="black" />
                                        <Text>Compartilhar</Text>
                                    </View>
                                </TouchableOpacity>
                                        
                                </View>
                                <Modal 
                                    animationType='slide' visible={atividade}
                                    onRequestClose={() => {setAtividade(false);}}
                                >
                                <TouchableOpacity style={styles.buttonMenu} 
                                onPress={() => {setAtividade(!atividade);}}
                                >
                                </TouchableOpacity>
                        <Atividade/>
           </Modal>
                        </View>
                        
                        )}
                        />

        </View>
    );
}

