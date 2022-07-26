import React from 'react';
import { useContext } from "react";
import { ThemeContext }  from './parentComponent'


function GrandChildComponent(){
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am grandchild component, styled by theme context!
      </button>
    </div>
  );
}

export default GrandChildComponent