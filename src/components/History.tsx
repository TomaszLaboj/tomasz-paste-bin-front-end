import { entry } from "./interfaces";

interface HistoryProps {
    entry: entry;
    handleClick:()=>void;
}

export function History(props: HistoryProps): JSX.Element {
    return (
        <div className="one-entry-container" onClick={props.handleClick} onKeyUp={props.handleClick} role="button" tabIndex={0}>
            <div>Title: {props.entry.title}</div>
            <div className="textField">{props.entry.text}</div>
        </div>
    );
}
