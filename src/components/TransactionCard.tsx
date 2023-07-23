import { Minus, Plus, Receipt } from '@tamagui/lucide-icons';
import {
  Button,
  Card,
  Text,
  View
} from 'tamagui';

interface ITransactionCard {
  title: string;
  transactionDate: string;
  value: string;
  typeOfTransaction: string;
}

export default function TransactionCard({ title, transactionDate, value, typeOfTransaction }:ITransactionCard) {

  function handleSeeDetails() {
    console.log('see details')
  }
  return (
    <>
      <Card width="100%" elevate p="$3.5" backgroundColor="$blue2" >
        <Card.Header flexDirection='row' mb="$4" alignItems='center'>
          <View flexDirection='row' alignItems='center'>
            <View flexDirection='row' alignItems='center' justifyContent='center' p="$1" backgroundColor={"$blue3"} borderRadius={50}>
              {
                title === "usou"
                  ? <View flexDirection='row' alignItems='center' justifyContent='center' p="$1" backgroundColor={"$red3"} borderRadius={50}>
                      <Minus size="$1" color={'$red10'}/>
                    </View>
                  : <View flexDirection='row' alignItems='center' justifyContent='center' p="$1" backgroundColor={"$green3"} borderRadius={50}>
                      <Plus size="$1" color='$green10'/>
                    </View>
              }
            </View>
            <View flexDirection='row' alignItems='center'>
              <Text fontSize="$5" color="$gray12" pl="$2">Você </Text>
              <Text fontSize="$5" color="$gray12">{title}</Text>
            </View>
            </View>
            <Text color="$gray12" fontSize="$5" fontWeight="700">{value}</Text>
            <Text color="$gray12" fontSize="$5"> {typeOfTransaction}</Text>
        </Card.Header>
        <Card.Footer alignContent='space-between' justifyContent='space-between'>
          <View flexDirection='row' alignItems='center'>
            <Text fontSize="$4" color="$gray11"> em </Text>
            <Text fontSize="$4" color="$gray11">{transactionDate}</Text>
          </View>
          
          <Button
            size="$3"
            icon={<Receipt size={16} color='$blue10'/>}
            backgroundColor={"$blue4"}
            color={"$blue10"}
            onPress={handleSeeDetails}
          >
            Ver mais detalhes
          </Button>
        </Card.Footer>
        <Card.Background>
        </Card.Background>
      </Card>
    </>
)}
