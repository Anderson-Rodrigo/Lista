import React, { Component } from 'react';
import { FlatList, Text, View, TextInput, Button } from 'react-native';
import styles from './src/styles/style';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    }
    this.insertItem = this.insertItem.bind(this);
    this.renderizarLista = this.renderizarLista.bind(this);
    this.limparLista = this.limparLista.bind(this);
  }

  renderizarLista(item) {
    return (
      <Text style={[styles.row, styles.listRow]}>
        {item.item.description}
      </Text>
    );
  }

  validarItem() {    
    return this.state.text !== "";
  }

  insertItem() {
    if (this.validarItem()) {
      let novoItem = {
        key: this.state.items.length.toString(),
        description: this.state.text
      }

      let items = this.state.items;
      items.push(novoItem);
      this.setState({ items });

      let text = "";
      this.setState({ text });

    } else {
      alert('Você deve informar um valor!');
    }
  }

  limparLista(){
      let items = this.state.items;
      let state = this.state;
      state.items = '';
      this.setState(items);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={[styles.textHeader, styles.row]}>
            Lista
          </Text>
        </View>
        <View style={styles.inputView}>

          <TextInput placeholder="Informe um valor..." onChangeText={(text) => { this.setState({ text }) }}
            value={this.state.text} />
        </View>

        <View style={styles.inputView}>
          <Button title="Adicionar Item" style={styles.botao} onPress={this.insertItem} />
          <Button title="Limpar Lista" style={styles.botao} onPress={this.limparLista} />
        </View>
          
        <FlatList style={styles.list} data={this.state.items} renderItem={this.renderizarLista} extraData={this.state} />
        <View style={styles.footer} >
          <Text style={[styles.textFooter]}>
          </Text>
        </View>
      </View>
    );
  }
}
