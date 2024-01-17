import classes from './BackDrop.module.scss';


const BackDrop = ({modalIsVisible}) => {
  return (
    <div className={[classes.container, !modalIsVisible && classes.close].join(' ')}>BackDrop</div>
  )
}

export default BackDrop