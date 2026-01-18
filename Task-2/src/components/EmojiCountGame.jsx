import {useState} from 'react';
import { Button } from '@mui/material';
import { Plus ,Minus} from 'lucide-react';


const EmojiCountGame = () => {  
    let [count, setCount] = useState(0);
    if (count < 0) {
        alert("Count cannot be negative!");
        count = 0;
    }
    if (count == 10) {
        alert("Congratulations! You reached 10!");
       
    }
return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-y-2.5">
      <h2>Emoji Count Game</h2> 
      <span className='text-4xl'>😊</span>
        <p>Count: {count}</p>
        <div className='flex justify-center gap-4 mb-4 '>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
            <Plus />
            Plus 1
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
            <Minus />
            Minus 1
        </Button>
        </div>
        <Button variant="contained" color="secondary" onClick={() => setCount(0)}>
            Reset
        </Button>

    </div>
  );
}
export default EmojiCountGame;
      