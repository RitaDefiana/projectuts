import React from 'react';
import { StyleSheet,
 Text,
 Button,
 TouchableOpacity,
 View,
 ImageBackground,
 StatusBar,
 Image,
 TextInput,
 ScrollView,
 Alert, ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const home = require('./img/home.png');
const custemer = require('./img/custemer.png');
const tambah = require('./img/tambah.png');
const orang = require('./img/orang.png');

class TambahScreen extends React.Component {
	static navigationOptions = {
    header: null
 };

	constructor()
    {
        super();
        this.state = {
          nama: '',
          alamat: '',
          nomor: '',
          ActivityIndicator_Loading: false,
        }
    }
    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://mhs.rey1024.com/appmobile/D1615051080/kirimData.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  alamat : this.state.alamat,
                  nomor : this.state.nomor,
                  
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  nama: '',
                  alamat: '',
                  nomor: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }


	render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }

		return(
			<ImageBackground
      		source={require('./img/bg1.jpg')}
      		style={styles.container}>
      			<View style={styles.containerMain}>
        			<StatusBar
          			backgroundColor="#AD1457"
          			barStyle="light-content"
        			/>
        			<Text style={styles.title}>PENDAFTARAN NAMA PENUMPANG</Text>
       				<Text style={styles.subTitle}>PELABUHAN KETAPANG BANYUWANGI</Text>
              <View style={{ backgroundColor: 'rgba(30,144,255, .4)', marginTop: 15 }}>
              <ScrollView>
       				 <Text style={styles.judul} >NAMA :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Nama "
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })}
                  value={this.state.nama}
              />
              <Text style={styles.judul} >ALAMAT :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Alamat "
                  onChangeText = {(TextInputText) => this.setState({ alamat: TextInputText })}
                  value={this.state.alamat}
              />
              <Text style={styles.judul} >NOMOR KENDARAAN :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Nomor "
                  onChangeText = {(TextInputText) => this.setState({ nomor: TextInputText })}
                  value={this.state.nomor}
              />
              
              </ScrollView>
              </View>
              <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}
                  onPress={this.submitData}>
                <Text style={{ fontSize: 20, color: '#fff',fontWeight: 'bold' }}>OK</Text>
              </TouchableOpacity>
              </View>

        		</View>
        		<View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={home} style={styles.menuIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('CustemerScreen')}>
          <Image source={custemer} style={styles.menuIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('TambahScreen')}>
            <Image source={tambah} style={styles.menuIcon} />
          </TouchableOpacity>

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
    backgroundColor: '#0D47A1',
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
    tintColor: '#FFFFFF',
    height: 30,
    width: 30,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  isian: {
    //backgroundColor: 'rgba(255,255,255, .6)',
    width: '100%',
    padding: 10,
    fontSize: 15,
    color: '#000'
  },
  judul: {
    padding: 1,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 35,
    width: 150,
    backgroundColor: '#01579b',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    justifyContent: 'center',
  }
});

export default TambahScreen;
