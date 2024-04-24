/*import React from 'React';
export default () =>{
    return <h1>Hello! Container</h1>
}*/
// Include the marketing component

import React from 'react';
import mount from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp';
console.log(mount);
export default () =>{
    return <div>
            <h1>Hello! Container</h1>
            <MarketingApp></MarketingApp>
            </div>
}
