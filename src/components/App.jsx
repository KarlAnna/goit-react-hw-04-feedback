import React, { Component } from 'react';
import Section from './Section'
import Notification from './Notification'
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import './Feedback.css';

class App extends Component {
    
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (options) => {
    this.setState(prevState => {
        return {
          [options]: prevState[options] + 1
        }
    })
  }

  countTotalFeedback = () => {
      const {good, neutral, bad} = this.state
        return good + neutral + bad
    }

  countPositiveFeedbackPercentage = (good, total) => {
    return (good / total * 100).toFixed(0)
  }

    
  render() {
    const options = Object.keys(this.state)

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0 ? 
          <Statistics
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage} />
          :<Notification message={"There is no feedback"} />}
        </Section>
      </>
    )
  }
}

export default App;