import styles from './BaseTemplate.module.css';
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate = ({ sampleTextProp }: IBaseTemplate): JSX.Element => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
