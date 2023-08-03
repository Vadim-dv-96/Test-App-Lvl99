import style from './App.module.scss';
import { AddItemForm } from './components/AddNameForm/AddNameForm';
import { NameUser } from './components/NameUser/NameUser';
import { useAppDispatch } from './hooks/hooks';
import { setUserName } from './state/nameForm-reducer';

function App() {
  const dispatch = useAppDispatch();

  const addUsername = (userName: string) => {
    dispatch(setUserName({ userName }));
  };

  return (
    <div className={style.App}>
      <div className={style.container}>
        <AddItemForm addUsername={addUsername} />
        <NameUser />
      </div>
    </div>
  );
}

export default App;
