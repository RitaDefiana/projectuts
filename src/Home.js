import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const home = require('./img/home.png');
const custemer = require('./img/custemer.png');
const tambah = require('./img/tambah.png');

class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	render() {
		return (
			<ImageBackground
          source={require('./img/bg1.jpg')}
          style={styles.container}>
            <View style={styles.containerMain}>
              <StatusBar
                backgroundColor="#0D47A1"
                barStyle="light-content"
              />
              <Text style={styles.title}>PENDAFTARAN NAMA PENUMPANG</Text>
              <Text style={styles.subTitle}>PELABUHAN KETAPANG BANYUWANGI</Text>
             <View style={styles.box}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('TambahScreen')}>
          <Text style={{ color: '#fff'}}>DAFTAR</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CustemerScreen')}>
            <Text style={{ color: '#fff' }}>CEK DAFTAR</Text>
          </TouchableOpacity>

        </View> 

            </View>
            
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  containerMain: {
    flex: 1,
    
  },
  title: {
    
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: '#0D47A1',
  },
  subTitle: {
    backgroundColor: '#0D47A1',
    color: '#fff',
    fontSize: 14,
    paddingBottom: 12,
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: 'rgba(27,94,32, .6)',
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 0.05,

  },
  menu:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 
  },
  menuIcon:{
    tintColor: '#000',
    height: 30,
    width: 30,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  button: {
    height: 35,
    width: 150,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
