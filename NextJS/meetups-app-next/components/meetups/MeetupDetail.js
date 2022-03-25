import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
    const { image, title, address, decription } = props;
    return (
        <section className={classes.detail}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{decription}</p>
        </section>
    )
}

export default MeetupDetail