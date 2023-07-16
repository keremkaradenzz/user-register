import React from 'react'
import { styles } from './styles'
import { Table as TableRN, Row, Rows } from 'react-native-table-component'

const Table = props => {
  const { tableData, tableHead } = props
  return (
    <>
      {Array.isArray(tableData) && (
        <TableRN
          borderStyle={{
            borderWidth: 2,
            borderColor: '#c8e1ff',
            width: '100%',
            flex: 1
          }}
        >
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </TableRN>
      )}
    </>
  )
}

export default Table
