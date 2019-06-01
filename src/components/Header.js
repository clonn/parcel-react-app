import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="TodoList" to='/' component={Link} />
                    <Tab label="MovieList" to='/movies' component={Link} />
                </Tabs>
            </AppBar>
        </header>
    )
}

export default Header