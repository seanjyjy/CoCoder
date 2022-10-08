import { QuestionDifficulty } from 'src/shared/constants';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './index.scss';

let samplePastAttemptsArray: { user1: string, user2: string, question: string, difficulty: QuestionDifficulty, date: string }[] = [
    { "user1": "TestUser1", "user2": "TestUser2", "question": "#1 Two Sum", "difficulty": QuestionDifficulty.EASY, "date": "29/8/22" },
    { "user1": "TestUser1", "user2": "TestUser3", "question": "#2 Three Sum", "difficulty": QuestionDifficulty.MEDIUM, "date": "29/8/22" },
    { "user1": "TestUser1", "user2": "TestUser3", "question": "#2 Three Sum", "difficulty": QuestionDifficulty.MEDIUM, "date": "29/8/22" },
    { "user1": "TestUser1", "user2": "TestUser3", "question": "#2 Three Sum", "difficulty": QuestionDifficulty.MEDIUM, "date": "29/8/22" },
    { "user1": "TestUser1", "user2": "TestUser3", "question": "#2 Three Sum", "difficulty": QuestionDifficulty.MEDIUM, "date": "29/8/22" },
    { "user1": "TestUser1", "user2": "TestUser3", "question": "#2 Three Sum", "difficulty": QuestionDifficulty.MEDIUM, "date": "29/8/22" },
];

const History = () => {
  return (
    <div>
      <div className="history__header">Past Attempts</div>
      <div className="history__button_container">
        {(samplePastAttemptsArray).map((attempt) => (
            <Box className="history__box" component="div">
            <div className="history__usersAndDate">
                <p id="history__users">{attempt.user1} • {attempt.user2}</p>
                <p id="history__date">{attempt.date}</p>
            </div>
            <Divider></Divider>
            <p id="history__question">{attempt.question}</p>
            <p id="history__difficulty">{attempt.difficulty}</p>
            </Box>
            
        ))}
      </div>
    </div>
    
  );
};

export default History;
