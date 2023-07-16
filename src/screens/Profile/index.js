import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { globalContainer } from '../../assets/theme/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles'
import Table from '../../components/Table'
import { ProfilePhoto } from '../../assets/images'
const Profile = ({ route }) => {
  const [user, setUser] = useState(null)
  const [tableData, setTableData] = useState([])
  const [projectData, setProjectData] = useState([])
  const tableHead = ['Name', 'Surname', 'Country', 'Phone']
  const tableHeadEdu = ['School Name', 'School Part', 'Education Level']
  const tableHeadWork = ['Work Status', 'Job Name']
  useEffect(() => {
    ;(async () => {
      try {
        const id = JSON.parse(await AsyncStorage.getItem('id'))
        const users = JSON.parse(await AsyncStorage.getItem('usersProfile'))
        const _user = users.find(u => u.id === id)
        if (_user) {
          setUser(_user)
          const arr = [_user.name, _user.surname, _user.country, _user.phone]
          setTableData([arr])
          let projectArr = []
          _user.projects.map(item => projectArr.push([item.projectName]))
          setProjectData(projectArr)
        }
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <SafeAreaView
      style={globalContainer({
        minHeight: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%'
      })}
    >
      <View style={styles.wrapper}>
        <View style={styles.row}>
          {user?.profilePhoto ? (
            <Image
              source={{ uri: user?.profilePhoto }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                marginBottom: 20
              }}
            />
          ) : (
            <ProfilePhoto style={{ width: 100, height: 100 }} />
          )}
        </View>
        <Table tableData={tableData} tableHead={tableHead} />
        <Text style={styles.headText}>Education</Text>
        <Table
          tableData={[
            [user?.schoolName, user?.schoolPart, user?.educationLevel]
          ]}
          tableHead={tableHeadEdu}
        />
        <Text style={styles.headText}>Work</Text>
        <Table
          tableData={[[user?.workStatus, user?.jobName]]}
          tableHead={tableHeadWork}
        />
        <Text style={styles.headText}>Projects</Text>
        <Table tableData={projectData} tableHead={['Project Name']} />
        {user?.cv?.[0]?.name && (
          <Text style={styles.headText}>CV : {user?.cv?.[0]?.name}</Text>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Profile
