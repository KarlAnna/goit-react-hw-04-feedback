import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className='button-list'>
            {options.map(key => (
                <li key={key}><button type='button' onClick={()=>onLeaveFeedback(key)}>{key}</button></li>
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;