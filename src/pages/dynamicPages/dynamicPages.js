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
import CartContainer from './CartContainer';

const useStyles = makeStyles((theme) => ({
  
}));

const DynamicPages = (props) => {
  const classes = useStyles();
  const [tableData, setTableData] = React.useState([]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  const [selectedBooks, setSelectedBooks] = React.useState([]);

  // Table column define
  const columns = [
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Sub Title',
      accessor: 'subtitle'
    }, 
    {
      Header: 'Author',
      accessor: 'author'
    }, 
    {
      Header: 'Publisher',
      accessor: 'publisher'
    }, 
    {
      Header: 'No. of pages',
      accessor: 'pages'
    }, 
    {
      Header: 'Add to cart',
      accessor: 'isbn'
    }, 
  ];

  React.useEffect(() => {
    setTableData(Books);
  }, []);
  
  return (
    <>
    <div id="portal-root"></div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <EnhancedTable
            columns={columns}
            data={tableData ? tableData : []}
            rowSelection={true}
            skipPageReset={skipPageReset}
            toolbar={{
              show: true,
              title: 'Pages',
              enableSearch: true,
              actionButtonGroup: (selected) => {
                const noOfSelection = Object.keys(selected).length;
                const selecterRows = [];
                Object.keys(selected) &&
                Object.keys(selected).length > 0 &&
                Object.keys(selected).map((selectedKey) => {
                  selecterRows.push(tableData[selectedKey]);
                  // setSelectedBooks();
                });
                return (
                  <div style={{ display: 'flex' }}>
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
                    <CartContainer data={selecterRows}/>
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

export default DynamicPages;
