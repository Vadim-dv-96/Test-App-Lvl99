import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setUserName } from '../../state/nameForm-reducer';
import style from './style.module.scss';

export const EditableSpan = () => {
  const name = useAppSelector((state) => state.nameForm.userName);
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(name[0]);
  };

  const activateViewMode = () => {
    setEditMode(false);
    dispatch(setUserName({ userName: title }));
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div className={style.editableSpanBlock}>
      {editMode ? (
        <TextField
          color="secondary"
          variant="standard"
          size="small"
          value={title}
          onChange={onChangeHandler}
          autoFocus
          onBlur={activateViewMode}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>User name: {name} </span>
      )}
      <div>
        <Button onClick={activateEditMode}>Change Name</Button>
      </div>
    </div>
  );
};
