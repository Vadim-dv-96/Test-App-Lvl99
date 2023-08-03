import { Button, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setUserName } from '../../state/nameForm-reducer';

type AddItemFormPropsType = {
  addUsername: (userName: string) => void;
};

export const AddItemForm = ({ addUsername }: AddItemFormPropsType) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const adduserNameHandler = () => {
    if (error) setError(null);
    if (name.trim() !== '') {
      addUsername(name.trim());
      setName('');
    } else {
      setError('Name is required');
    }
  };

  useEffect(() => {
    const userNameStorage = JSON.parse(localStorage.getItem('name') as string);
    if (userNameStorage) {
      dispatch(setUserName({ userName: userNameStorage }));
    }
  }, [dispatch]);

  return (
    <div>
      <TextField
        size="small"
        label="Enter name"
        variant="outlined"
        color="secondary"
        value={name}
        onChange={inputHandler}
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" color="secondary" onClick={adduserNameHandler}>
        save
      </Button>
    </div>
  );
};
