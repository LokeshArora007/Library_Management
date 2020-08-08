import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  DynamicPageFormFields
} from '../../components';
import books from '../users/books.json';

/** STYLES HERE * */
const useStyles = makeStyles(() => ({
  
}));

const getBooks = ()=> {
    return books;
}

const DynamicPageAdd = (props) => {
  const classes = useStyles();
  const [pageType, setPageType] = React.useState('add');
  const [expandAddPolicy, setExpandAddPolicy] = React.useState(true);

  React.useEffect(() => {
    
  }, []);

  const books = getBooks();

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>      
        <ExpansionPanel
          expanded={expandAddPolicy}
          onChange={(e, exp) => setExpandAddPolicy(!expandAddPolicy)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
              {pageType} Page
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DynamicPageFormFields
              pageType={pageType}
              cancelClick={() => props.history.push('/pages')}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};

export default DynamicPageAdd;
