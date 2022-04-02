import * as React from 'react';
import AppContext from "../context/AppContext";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

export default function Contacts() {
  const state = React.useContext(AppContext)

  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    myFunction();
    return () => {
        setMessages([]); // This worked for me
    };
  }, []);

  const myFunction = () => {
    setMessages(state.messages);
  }
    
    return(
        <List>
          {messages.map((value, index) => {
            const labelId = `label-${value}`;
            return (
              <ListItem
                key={index}
                disablePadding
              >
                {Math.random() * (5 - 0) + 0 < 3 ?
                  <ListItemButton sx={{width: '80%', maxWidth: '80%', height: 'auto', maxHeight: '100%'}}>
                    <ListItemAvatar>
                      <Avatar
                        sx={{color: '#282845'}}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{backgroundColor: '#7878b3', paddingLeft: 2, minHeight: 40, height: 'auto', width: '80%', borderRadius: 2, color: '#FFFFFF'}}
                    id={labelId} primary={value} />
                  </ListItemButton>
                :
                  <ListItemButton sx={{width: '100%', maxWidth: '100%', height: 'auto', maxHeight: '100%', paddingLeft: '20%'}}>
                    <ListItemText
                      sx={{backgroundColor: '#282845', paddingLeft: 2, minHeight: 40, height: 'auto', width: '80%', borderRadius: 2, color: '#FFFFFF'}}
                    id={labelId} primary={value} />
                  </ListItemButton>
                }
                
              </ListItem>
            );
          })}
        </List>
    )
}