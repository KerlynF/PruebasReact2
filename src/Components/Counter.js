import React from 'react';
import '../styleSheets/Counter.css'
function ClickCounter( {numClicks} )
{
    return (
        <div className='counter-class'>
            {numClicks}
        </div>
    );
}

export default ClickCounter;