// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import UserListTable from './UserListTable'
import UserListCards from './UserListCards'

const UserList = ({ userData }) => {
  return (
    <Grid item spacing={6}>
        <UserListTable tableData={userData} />
    </Grid>
  )
}

export default UserList
