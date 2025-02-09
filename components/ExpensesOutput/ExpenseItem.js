import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';

function ExpenseItem({ description, amount, date }) {

    function expensePressHandler() {
        console.log('pressed');
    }   

    return <Pressable onPress={expensePressHandler}
    style={({ pressed }) => pressed && styles.pressed}
    android_ripple={{ color: '#ccc' }}>
        <View style={styles.expenseItem}>
            <View style={[styles.textBase, styles.description]}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.date}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descriptionContainer: {
        flexDirection: 'column',
        gap: 4,
        flex: 1,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
})