/**
 * @format
 */

import 'react-native';
import React from 'react';
import MyMessage from '../Components/MyMessage';
import UserMessage from '../Components/UserMessage';
import ChatScreen from '../Screens/ChatScreen';
import ColorScreen from '../Screens/ColorScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import UserNameScreen from '../Screens/UserNameScreen';
import UsersListScreen from '../Screens/UsersListScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Mychecknet from '../Components/Netcheck';
//import ReconnectingWebSocket from 'react-native-reconnecting-websocket';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('Test my Ui Components', () => {

  //jest.mock('react-native-reconnecting-websocket');



  it('snapshot testing MyMessage component ', () => {
    const myCompMessage = renderer.create(<MyMessage />).toJSON
    expect(myCompMessage).toMatchSnapshot();
  });

  it('snapshot testing UserMessage component ', () => {
    const myCompUM = renderer.create(<UserMessage />).toJSON
    expect(myCompUM).toMatchSnapshot();
  });

  it('snapshot testing ChatScreen component ', () => {
    const myCompChat = renderer.create(<ChatScreen />).toJSON
    expect(myCompChat).toMatchSnapshot();
  });

  it('snapshot testing ColorScreen component ', () => {
    const myCompColor = renderer.create(<ColorScreen />).toJSON
    expect(myCompColor).toMatchSnapshot();
  });

  it('snapshot testing LoginScreen component', () => {
    const myCompLogin = renderer.create(<LoginScreen />).toJSON
    expect(myCompLogin).toMatchSnapshot();
  });

  it('snapshot testing RegistrationScreen component', () => {
    const myCompRegistr = renderer.create(<RegistrationScreen />).toJSON
    expect(myCompRegistr).toMatchSnapshot();
  });

  it('snapshot testing UserNameScreen component', () => {
    const myCompUserName = renderer.create(<UserNameScreen />).toJSON
    expect(myCompUserName).toMatchSnapshot();
  });

  it('snapshot testing UserListScreen component', () => {
    const myCompUsersList = renderer.create(<UsersListScreen />).toJSON
    expect(myCompUsersList).toMatchSnapshot();
  });

  it('snapshot testing WelcomeScreen component', () => {
    const myCompWelcome = renderer.create(<WelcomeScreen />).toJSON
    expect(myCompWelcome).toMatchSnapshot();
  });

});

describe('Test my Functional', () => {


  it('constructor function  Testing MyMessage Page', () => {
    let ctr = renderer.create(<MyMessage />).getInstance()
    let vr = ctr.constructor()
    expect(vr).toBeDefined()
  });

  it('componentDidMount function  Testing MyMessage Page', () => {
    let cdm = renderer.create(<UserNameScreen />).getInstance()
    let vr1 = cdm.componentDidMount()
    expect(vr1).not.toBeDefined()
  });

  it('componentWillUnMount function  Testing MyMessage Page', () => {
    let cdm = renderer.create(<UserNameScreen />).getInstance()
    let vr2 = cdm.componentDidMount()
    expect(vr2).not.toBeDefined()
  });


  it('constructor function  Testing UserNameScreen Page', () => {
    let ctr = renderer.create(<UserNameScreen />).getInstance()
    let vrb = ctr.constructor()
    expect(vrb).toBeDefined()
  });

  it('componentDidMount function  Testing UserNameScreen Page', () => {
    let cdm = renderer.create(<UserNameScreen />).getInstance()
    let vrb2 = cdm.componentDidMount()
    expect(vrb2).not.toBeDefined()
  });

  it('addName function  Testing UserNameScreen Page', () => {
    let txt = "Niko"
    let tet = "Jim"
    let adm = renderer.create(<UserNameScreen />).getInstance()
    let vrb1 = adm.addName(txt)
    expect(vrb1).not.toEqual(tet)
  });

  it('submitName function  Testing UserNameScreen Page', () => {
    let sbm = renderer.create(<UserNameScreen />).getInstance()
    let vrb3 = sbm.submitName()
    expect(vrb3).not.toBeDefined()
  });
  it('_storeUser works with async/await', async () => {
    let namel='Dima'
    let getN = renderer.create(<UserNameScreen />).getInstance()
    const name = await getN._storeUser(namel);
    expect(name).toBe("Dima");
  });

  it('_getName works with async/await', async () => {
 
    let getN = renderer.create(<UserNameScreen />).getInstance()
    const name = await getN._getName();
    expect(name).toBe("Fenix");
  });
  it('userNames function  Testing UserNameScreen Page', () => {
    let userN = renderer.create(<UserNameScreen />).getInstance()
    let nam = userN.userNames()
    expect(nam).not.toBeDefined()
  });
  
  it('_storeColor works with async/await', async () => {
    expect.assertions(1);

    let clr = renderer.create(<ColorScreen />).getInstance()
    const data = await clr._storeColor('#fafafa');
    expect(data).not.toEqual('#CCC');
  });
  it('_storeColor works with async/await', async () => {
    let clr = renderer.create(<MyMessage />).getInstance()
    const data = await clr._getItem();
    expect(data).not.toBeDefined();
  });

  it('constructor function  Testing Mychecknet Page', () => {
    let ctr = renderer.create(<Mychecknet />).getInstance()
    let net = ctr.constructor()
    expect(net).toBeDefined()
  });

  it('checknet function  Testing Mychecknet Page', () => {
    let ctr = renderer.create(<Mychecknet />).getInstance()
    let net = ctr.checknet();
    expect(net).toBeDefined()
  });
  it('constructor function  Testing ChatScreen Page', () => {
    let ctr = renderer.create(<ChatScreen />).getInstance()
    let chat = ctr.constructor()
    expect(chat).toBeDefined()
  });

  it('_getName works with async/await', async () => {

    let getN = renderer.create(<ChatScreen />).getInstance()
    const name = await getN._getName();
    expect(name).toBe("Niko");
  });

  it(' getIp works with async/await', async () => {

    let getI = renderer.create(<ChatScreen />).getInstance()
    const ip = await getI.getIp();
    expect(ip).toBe("192.168.1.200");
  });

  it('submitMessage function  Testing ChatScreen Page', () => {
    let sub = renderer.create(<ChatScreen />).getInstance()
    let btn = sub.submitMessage()
    expect(btn).toBeDefined()
  });

  it('addMessage function  Testing ChatScreen Page', () => {
    let data={ip:"192.168.2.175", name:'Emin', text:'Hello how are u?', time:"16:75"}
    let data1={ip:"192.168.2.175", name:'Emin', text:'Hello how are u?', time:"16:75"}
    let addM = renderer.create(<ChatScreen />).getInstance();
    let msg = addM.addMessage(data);
    expect(msg).toBe(data1);
  });

  it('getRandomColor function  Testing ChatScreen Page', () => {
    let col = renderer.create(<ChatScreen />).getInstance()
    let getCol = col.getRandomColor()
    expect(getCol).toBeDefined()
  });

  it('getNotification function  Testing ChatScreen Page', () => {
    let name="Ali";
    let text="Hello guys !"
    let ntf = renderer.create(<ChatScreen />).getInstance()
    let getNtf = ntf.getNotification(name, text)
    expect(getNtf).not.toBe("Niko", "Elen")
  });


});
