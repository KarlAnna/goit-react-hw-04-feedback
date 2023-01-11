import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total > 0) {
        return (
            <ul>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive feedback: {positivePercentage(total)}%</p>
                </li>
            </ul>
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.func
}

export default Statistics;