import style from './style.module.scss';
import { EditableSpan } from '../EditableSpan/EditableSpan';

export const NameUser = () => {
  return (
    <div className={style.nameBlock}>
      <EditableSpan />
    </div>
  );
};
