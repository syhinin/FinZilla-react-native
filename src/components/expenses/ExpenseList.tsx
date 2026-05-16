import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  COLORS,
  getCategoryColor,
  isColorLight,
} from "@/utils/constants/colors";
import { ExpenseType } from "@/utils/type";

interface ExpenseListProps {
  data: ExpenseType[];
  onSelectCategory?: (index: number) => void;
}

export function ExpenseList({ data, onSelectCategory }: ExpenseListProps) {
  const renderItem = ({
    item,
    index,
  }: {
    item: ExpenseType;
    index: number;
  }) => {
    let amount = item.amount.toString().split(".");
    const bgColor = getCategoryColor(index);
    const isLight = isColorLight(bgColor);
    const textColor = isLight ? COLORS.black : COLORS.white;

    return (
      <TouchableOpacity
        style={[styles.expenseItem, { backgroundColor: bgColor }]}
        onPress={() => onSelectCategory && onSelectCategory(index)}
        activeOpacity={0.8}
      >
        <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
        <Text style={[styles.value, { color: textColor }]}>
          {amount[0]}
          {amount[1] && (
            <>
              <Text style={{ color: textColor }}>.</Text>
              <Text style={[styles.decimalValue, { color: textColor }]}>
                {amount[1]}
              </Text>
            </>
          )}
        </Text>
        <View
          style={[
            styles.percentageWrapper,
            isLight && { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          ]}
        >
          <Text style={[styles.percentage, { color: textColor }]}>
            {item.percentage}%
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => console.log("Add expense clicked")}
    >
      <Text style={styles.addIcon}>+</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.expenceList}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  expenceList: {},
  expenseItem: {
    minWidth: 100,
    padding: 16,
    borderRadius: 16,
    marginRight: 20,
    gap: 8,
    height: 110,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    color: COLORS.white,
    fontSize: 14,
  },
  value: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 600,
  },
  percentageWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
  percentage: {
    color: COLORS.white,
  },
  decimalValue: {
    fontSize: 12,
    fontWeight: 400,
  },
  addButton: {
    minWidth: 60,
    height: 110,
    borderRadius: 16,
    marginRight: 20,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  addIcon: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 28,
    fontWeight: "300",
  },
});
