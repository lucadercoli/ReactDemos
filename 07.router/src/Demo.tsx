import React from 'react';
import { useParams } from 'react-router-dom';
 
const Demo = () => {
  const { param1, param2 } = useParams();
  return <div>
    <h4>Demo</h4>
    <p>This is Demo page.</p>
    <div>{param1 ? <b>Parameter 1: {param1}</b> : <i>Parameter 1 is optional.</i>}</div>
    <div>{param2 ? <b>Parameter 2: {param2}</b> : <i>Parameter 2 is optional.</i>}</div>
  </div>
}
 
export default Demo;