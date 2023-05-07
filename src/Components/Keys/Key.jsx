import classes from "./Key.module.css"
import Sound from "../Audio/Sound";
const Key = props => {
    const src= `/Sounds/${props.soundName}.wav`
    return (
    <div data-key={props.dataKey} className={classes.key}>
        <kbd>{props.kbdName}</kbd>
        <span className={classes.sound}>{props.soundName}</span>
        <Sound datakey={props.dataKey} src={src}/>
    </div>
    );
}

export default Key;