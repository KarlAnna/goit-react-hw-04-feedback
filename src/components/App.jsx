import React, { useState } from 'react';
import Section from './Section';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import './Feedback.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (total) => {
    return (good / total * 100).toFixed(0)
  }

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
