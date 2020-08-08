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
import books from './books.json';

/** STYLES HERE * */
const useStyles = makeStyles(() => ({
  
}));

const getBooks = ()=> {
    return books;
}

const Books = (props) => {
  const classes = useStyles();
  const [pageType, setPageType] = React.useState('add');
  const [expandAddPolicy, setExpandAddPolicy] = React.useState(true);
  React.useEffect(() => {
    
  }, []);
  const books = getBooks();
  return (
    <div>
        <ul>
        {books.map((book, i) => (
            <li>{book.title}</li>
        ))}
        </ul>
    </div>
  );
};

export default Books;
