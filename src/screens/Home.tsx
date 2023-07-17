import { Plus } from 'lucide-react-native';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Seu saldo é</Text>
        <Text style={styles.balanceValue}>R$ 129.22</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.addBalanceButton}>
          <Plus color="#007AFF" size={24} />
          <Button title="Adicionar saldo" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'Barlow400Regular',
  },
  boxContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#11455ba9'
  },
  balanceValue: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  balanceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 80,
    paddingTop: 40,
    paddingLeft: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  addBalanceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  }

});
