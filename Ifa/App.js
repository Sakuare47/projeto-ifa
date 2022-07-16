import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/buzioFe1.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'É pouco provável que amanhã as coisas estejam como hoje.',
    'Nunca se verá um ancião mandar que se espanque alguém.',
    'Ninguém grita de dor quando cuida de suas próprias feridas.',  
    'Não se deixa um cavaleiro para se casar com um peão.',
    'A pessoa morre de acordo com o seu proprio peso; o pássaro Olongo de peito ruivo, ao cair morto, não faz grande barulho qando bate no chão.',
    'O morcego se coloca de cabeça pra baixo, olhando o que fazem os pássaros.',
    'Aquele que cai em um buraco ensina aos que vêm atrás a terem cuidado.',
    'Aquele que bate palmas para que um louco dance é tão louco como ele mesmo.',
    'Gudugudu se parece com Esuru, porem não se pode comer.',
    'Aquele que atira pedras em 200 galinhas atirará pedras até que caia a noite.',
    'Quando apareceu pela primeira vez, o broto de uma palmeira nova disse que seu objetivo era chegar ao céu.',
    'Quando o leopardo anda solto, todo mundo vê.',
    'A boca não pode ser tão suja que seu dono não possa comer com ela.',
    'A boca que não se cala e os lábios que não deixam de se mexer, só trazem problemas e bloqueios na vida.',
    'Quando estamos muito velhos, perdemos os dentes, tapamos a boca com as mãos.',
    'O caráter é como um deus, ele te apoiará segundo te comportes.',
    'Você não pode fazer do macaco um homem, porém tampouco deve duvidar que os homens provem do macaco.',
    'Quem não sabe construir uma casa, monta uma barraca.',
    'O mundo é o oceano, as pessoas são lagoas. Se não sabes nadar nunca poderás desfrutar da vida.',
    'Quando a mão direita lava a esquerda e a esquerda lava a direita, ambas ficam limpas.',
    'O que eu quero comer, você não quer comer. Devemos comer separados.',
    'Quando se leva carne de elefante sobre sua cabeça não deve mexer em um ninho de grilos com os pés.',
    'É a lagarta que se transforma em mariposa, é o ovo quem produz a galinha.',
    'Aquele que cochicha, olha até o bosque, porém o bosque não faz fofoca. Aquele a quem contaste teus segredos é o traidor.',
    'O parasita não tem raízes, seus parentes são as árvores.',
    'O desconfiado sempre pensa que as pessoas estão falando dele.',
    'Somente um barril vazio é que faz barulho, um saco cheio de dinheiro permanece silencioso.',
    'As perguntas livram o homem dos erros, aquele que não pergunta, entrega-se aos problemas.',
    'O professor não nos ensina a fazer o mal, se não temos o mal por dentro. Quem nos ensina, ensina a fazer o bem.',
    'O pântano se mantém a margem, como se não estivesse disfarçado com o rio.',
    'A raiz da árvore nunca lança uma sombra.',
    'A mão direita não pode lavar sem o auxílio da mão esquerda.',
    'A pessoa que não consegue usar sua sabedoria torna-se mudo.',
    'Aqueles que não sabem o sofrimento não pode sentir prazer.',
    'O pote que alimenta a família é incapaz de se alimentar.',
    'Quem sabe a prudência não pode ser um covarde.',
    'Depois que eu iniciei, eu iniciei a mim mesmo.',
    'O machado esquece; a árvore recorda.',
    'O cavalo que chega cedo bebe a água boa.',
    'Não importa quão longa seja a noite, o dia virá certamente.',
    'A água sempre descobre um meio.',
    'Os defeitos são como uma colina: você escala os seus e, lá de cima, não vê os dos outros.',
    'O que você dá aos outros, você dá a si mesmo.',
    'Ninguém experimenta a profundidade de um rio com os dois pés.',
    'Não pise no rabo do cachorro e ele não o morderá.',
    'Não deixe o que você não pode fazer afastá-lo do que você pode.',
    'O casamento é como um amendoim; você tem que quebrá-lo para ver o que está dentro.',
    'Paciência é a chave que resolve todos os problemas.',
    'Estar sempre com pressa não impede a morte.',
    
  ];


  function jogarIfa(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/buzioAb1.png'));
  }

  function reiniciarJogo(){
    setImg(require('./src/buzioFe1.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
        <Image 
         source={img}
         style={styles.img}
        />

        <Text style={styles.textofrase}> {textoFrase} </Text>

        <TouchableOpacity style={styles.botao} onPress={ jogarIfa }>

          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}> Provérbios de Ìfá </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { marginTop:15, borderColor:'#0f4c28' }]} onPress={ reiniciarJogo }>

          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, { color:'#0f4c28' }]}> Reiniciar </Text>
          </View>
        </TouchableOpacity>

      <Image style={styles.camaleLogo} source={require('./src/camaleao1.png')} />


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#fcf8e2",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#6ca72b",
    borderWidth:5,
  },
  textofrase:{
    fontSize:20,
    color:"#dd7b22",
    margin:30,
    fontStyle:"italic",
    textAlign:"center",
  },
  botao:{
    width:230,
    height:50,
    borderColor:"#dd7b22",
    borderWidth:3,
    borderRadius:25,
  },
  btnArea:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  btnTexto:{
    fontSize:18,
    fontWeight:"bold",
    color:"#dd7b22",
  },
  camaleLogo:{
    width:166,
    height:136,
    marginTop:30,
    borderColor:"#0f4c28",
    borderWidth:1,
    borderRadius:25,
  },

 })

export default App;


