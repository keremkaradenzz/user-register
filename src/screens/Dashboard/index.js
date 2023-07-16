import React from 'react'
import { Dimensions, SafeAreaView, Text, View } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { styles } from './styles'
import { globalContainer } from '../../assets/theme/styles'
const Dashboard = () => {
  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8]
  }

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 40
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  }
  return (
    <SafeAreaView
      style={globalContainer({
        minHeight: '100%',
        justifyContent: 'flex-start',
        width: '100%'
      })}
    >
      <View style={styles.container}>
        <Text>Expenses chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel='$'
          yAxisSuffix='k'
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <Text>Expenses Category Chart</Text>
        <ProgressChart
          data={data}
          width={Dimensions.get('screen').width}
          height={220}
          strokeWidth={16}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Dashboard
