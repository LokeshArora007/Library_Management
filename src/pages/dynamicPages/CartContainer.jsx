import React from 'react';
import {
    makeStyles,
    Grid,
    Tooltip,
    IconButton
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Portal from '../../components/portal';

const useStyles = makeStyles((theme) => ({
    container: {
        // border: '1px solid red'
        background: '#ccc',
        padding: '0.5rem'
    },
    items: {
        border: '1px solid ccc',
        display: 'inline-block',
        background: '#eee',
        margin: '0.5rem'
    },
    root: {
        width: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
}));

const CartContainer = (props) => {
    const [tableData, setTableData] = React.useState([]);
    const classes = useStyles();
    React.useEffect(() => {

    }, []);
    console.log(props)
    return (
        <Portal>
                {props.data.length ? (
            <div className={classes.container}>
                <h3>Cart</h3>
                <ul>
                    {props.data.map((item, i) => (
                        <li className={classes.items}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Author: {item.author}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        ) : null}
        </Portal>
    );
};

export default CartContainer;


