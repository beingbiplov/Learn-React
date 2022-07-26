import React from 'react';
import GrandChildComponent from './grandChild'
import { useContext } from "react";
import { ThemeContext }  from './parentComponent'


function ChildComponent(){
  const theme = useContext(ThemeContext);
  return (
    <div>
        <button style={{ background: theme.background, color: theme.foreground }}>
             I am child component, styled by theme context!
        </button>
        < GrandChildComponent />
    </div>
  );
}


export default ChildComponent