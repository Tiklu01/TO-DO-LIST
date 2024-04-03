import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {Create} from "@mui/icons-material";
import {InputAdornment} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoForm({add}) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
      setText(e.target.value);
    };
    const handleSubmit =(e)=>{
      e.preventDefault()
      add(text)
      setText("")
    }
    return (
      <ListItem>
        <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: ( // Change endAdornment to endadornment
              <InputAdornment position="end">
                <IconButton aria-label="Create Todo" edge="end" type="submit">
              <Create/>
                  
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </form>
      </ListItem>
    );
  }
  
  export default TodoForm;
  
