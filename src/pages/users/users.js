import React from 'react';
import {
  makeStyles,
  Grid,
  Tooltip,
  IconButton
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import {
  EnhancedTable
} from '../../components';
import Books from '../books/books.json';
import Users from './users.json';

const useStyles = makeStyles((theme) => ({
  
}));

const UsersPages = (props) => {
  const classes = useStyles();
  const [tableData, setTableData] = React.useState([]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // Table column define
  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'User Name',
      accessor: 'username'
    }, 
    {
      Header: 'Email',
      accessor: 'email'
    }, 
    {
      Header: 'Books Taken',
      accessor: 'books'
    }, 
    {
      Header: 'Books Taken on',
      accessor: 'published'
    }, 
  ];
  
  React.useEffect(() => {
    setTableData(Users.map((user, i)=>{
      if(Books[i]){
        return Object.assign({}, user, {
          'books':[Books[i].title], 
          'published':[Books[i].published]});
      }
      return user;
    }));
  }, []);
  
  return (
    <>
      <Grid container id="usersContainer">
        <Grid item xs={12} md={12} lg={12}>
          <EnhancedTable
            columns={columns}
            data={tableData ? tableData : []}
            rowSelection={true}
            skipPageReset={skipPageReset}
            toolbar={{
              show: true,
              title: 'Members',
              enableSearch: true,
              actionButtonGroup: (selected) => {
                const noOfSelection = Object.keys(selected).length;
                const selecterRows = [];
                Object.keys(selected) &&
                  Object.keys(selected).length > 0 &&
                  Object.keys(selected).map((selectedKey) => {
                    selecterRows.push(tableData[selectedKey]);
                  });
                return (
                  <div style={{ display: 'flex' }} id={'usersTable'}>
                    <Tooltip title="Add Policy">
                      <IconButton
                        aria-label="Add"
                        color="primary"
                        onClick={() => {
                          props.history.push('pages/add')
                        }}
                      >
                        <AddBoxIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Deactivate Policy">
                      <IconButton
                        aria-label="delete"
                        color="primary"
                        component="span" 
                        disabled={
                          noOfSelection === 0
                        }
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                );
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UsersPages;
