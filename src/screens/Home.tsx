import { Plus } from '@tamagui/lucide-icons';
import { StyleSheet } from 'react-native';
import { Button, Text, XStack, YStack } from 'tamagui';

export default function Home() {
  return (
    <YStack
      flex={1}
      fullscreen
      backgroundColor={"$blue1"}
      height={"100%"}
    >
      <YStack
        width="100%"
        paddingLeft={16}
        paddingTop={40}
        backgroundColor={"$blue1"}
      >
        <Text
          fontSize={14}
          color="$gray11"
        >
          Seu saldo é
        </Text>
        <Text
          fontSize="$10"
          fontWeight="800"
          color="$gray12"
        >
          R$ 129.22
        </Text>
      </YStack>
      <XStack 
        padding={16}
        backgroundColor={"$blue1"}
        w={"100%"}
      >
          <Button
            size="$5"
            icon={<Plus size={20} color={'$green10'}/>}
            backgroundColor="$green4"
            color={"$green10"}
            onPress={() => {}}
          >
            Adicionar saldo
          </Button>
      </XStack>
    </YStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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

});
