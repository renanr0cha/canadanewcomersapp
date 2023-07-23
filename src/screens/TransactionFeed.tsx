import { DateTime } from 'luxon';
import { ListItem, ScrollView, YStack } from 'tamagui';
import TransactionCard from '../components/TransactionCard';


export default function TransactionFeed() {
  const now = DateTime.now();
  const dates = [
    now.minus({ days: 1 }).setLocale("pt-BR").toLocaleString(DateTime.DATE_MED),
    now.minus({days: 3 }).setLocale("pt-BR").toLocaleString(DateTime.DATE_MED),
    now.minus({days: 5}).setLocale("pt-BR").toLocaleString(DateTime.DATE_MED),
    now.minus({days: 7}).setLocale("pt-BR").toLocaleString(DateTime.DATE_MED),
  ];

  return (
    <>
      <ScrollView backgroundColor="$blue1">
        <YStack backgroundColor="$blue1">
          <ListItem>
            <TransactionCard title="adicionou" value=" R$100,00" typeOfTransaction="de crédito" transactionDate={dates[0]}/>
          </ListItem>
          <ListItem>
            <TransactionCard title="usou" value=" R$24,00" typeOfTransaction="em compra" transactionDate={dates[1]}/>
          </ListItem>
          <ListItem>
            <TransactionCard title="adicionou" value=" R$50,00" typeOfTransaction="de crédito" transactionDate={dates[2]}/>
          </ListItem>
          <ListItem>
            <TransactionCard title="usou" value=" R$6,00" typeOfTransaction="em compra" transactionDate={dates[3]}/>
          </ListItem>
        </YStack>
      </ScrollView>
    </>
  );
}

