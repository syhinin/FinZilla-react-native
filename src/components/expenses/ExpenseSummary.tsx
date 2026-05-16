import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import { ExpenseList } from "@/components/expenses/ExpenseList";
import { COLORS, getCategoryColor } from "@/utils/constants/colors";
import expensesData from "@/utils/mockData/expenses.json";

type PieItem = {
  value: number;
  color: string;
  text: string;
  focused?: boolean;
};

export function ExpenseSummary() {
  const [activeIndex, setActiveIndex] = useState(0);

  const groupedAndSortedExpenses = useMemo(() => {
    const categoryTotals = expensesData.reduce(
      (acc, curr) => {
        acc[curr.name] = (acc[curr.name] || 0) + curr.amount;
        return acc;
      },
      {} as Record<string, number>,
    );

    const totalAmount = Object.values(categoryTotals).reduce(
      (sum, val) => sum + val,
      0,
    );

    return Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])
      .map(([name, amount], index) => ({
        id: index,
        name,
        amount: Number(amount.toFixed(2)),
        percentage: Math.round((amount / totalAmount) * 100),
        currency: "USD",
      }));
  }, []);

  const pieData = useMemo(() => {
    const top5 = groupedAndSortedExpenses.slice(0, 5);

    return top5.map((item, index) => ({
      value: item.amount,
      color: getCategoryColor(index),
      text: `${item.percentage}%`,
      focused: index === activeIndex,
    }));
  }, [groupedAndSortedExpenses, activeIndex]);

  return (
    <>
      <View style={styles.expenceSummary}>
        <View>
          <Text style={styles.expenceText}>
            My <Text style={styles.textBold}>Expenses</Text>
          </Text>
          <Text style={styles.amount}>
            $2350.<Text style={styles.amountDecimals}>92</Text>
          </Text>
        </View>

        <View>
          <PieChart
            onPress={(item: PieItem, index: number) => setActiveIndex(index)}
            data={pieData}
            donut
            focusOnPress
            showGradient={false}
            toggleFocusOnPress={false}
            extraRadius={5}
            sectionAutoFocus
            semiCircle
            radius={70}
            innerRadius={55}
            innerCircleColor={COLORS.black}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
                  >
                    {pieData[activeIndex].text}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <ExpenseList
        data={groupedAndSortedExpenses}
        onSelectCategory={(index) => {
          if (index < 5) {
            setActiveIndex(index);
          }
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  expenceSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  expenceText: {
    fontSize: 16,
    paddingBottom: 6,
    color: COLORS.white,
  },
  textBold: {
    fontWeight: 700,
  },
  amount: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: 700,
  },
  amountDecimals: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 400,
  },
});
