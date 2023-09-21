import classnames from 'classnames';
import styles from './nav.module.css';

export default function NavTitle() {
  return (
    <h1
      className={classnames(
        styles.headerTitleY,
        'p-2 text-base absolute -top-3 md:hidden'
      )}
    >
      Y-Stream
    </h1>
  );
}
