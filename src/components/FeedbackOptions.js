import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className='button-list'>
            {options.map(option => (
                <li key={option}><button type='button' onClick={()=>onLeaveFeedback(option)}>{option}</button></li>
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;