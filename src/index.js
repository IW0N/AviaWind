import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './components/index/Top';
import InteractiveWine from './components/index/InteractiveWine'
import InteractivePlane from './components/index/InteractivePlane'
import InteractiveLifebuoy from './components/index/InteractiveLifebuoy';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Top/>
        <InteractivePlane />
        <InteractiveWine />
        <InteractiveLifebuoy />
    </div>
);

