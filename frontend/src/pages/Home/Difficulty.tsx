import Button from '@mui/material/Button';
import { QuestionDifficulty } from 'src/shared/constants';
import UppercaseFirstOnly from 'src/util/UppercaseFirstOnly';
import './index.scss';

type DifficultyProps = {
  difficulty: QuestionDifficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<QuestionDifficulty>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Difficulty = ({ difficulty, setDifficulty, setOpen }: DifficultyProps) => {
  return (
    <div>
      <div className="difficulty__header">Choose your difficulty</div>
      <div className="difficulty__button_container">
        {Object.keys(QuestionDifficulty).map((val) => (
          <Button
            variant="outlined"
            key={val}
            color={difficulty !== val ? 'secondary' : 'primary'}
            onClick={() => setDifficulty(val as QuestionDifficulty)}
            style={{ textTransform: 'none' }}
          >
            {UppercaseFirstOnly(val)}
          </Button>
        ))}
      </div>
      <Button variant="contained" size="large" style={{ textTransform: 'none', padding: '10px 70px' }} onClick={() => setOpen(true)}>
        Practice
      </Button>
    </div>
  );
};

export default Difficulty;
