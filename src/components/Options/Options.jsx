import css from './Options.module.css'

export default function Options({ onUpdateFeedback, total, onResetFeedback }) {

    return (
        <ul className={css.list}>

            <li>
                <button onClick={() => onUpdateFeedback('good')} type="button">Good</button>
            </li>

            <li>
                <button onClick={() => onUpdateFeedback('neutral')} type="button">Neutral</button>
            </li>

            <li>
                <button onClick={() => onUpdateFeedback('bad')} type="button">Bad</button>
            </li>

            {total > 0 && <li>
                <button onClick={onResetFeedback} type="button">Reset</button>
            </li>}

        </ul>
    )
}