import React from 'react';
import '../css/todo.css';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Todo = ({ id, title }) => {
    const [checked, setChecked] = React.useState([0]);
  
    const handleToggle = value => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (
        <ListItem  key={id} role={undefined} dense button onClick={handleToggle(id)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    color="primary" />
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    )
}

export default Todo;