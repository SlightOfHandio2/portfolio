import React, { Children } from 'react';
import "./css/ProjectView.css"

interface Props {
  background: String
  title: String
  children: any
}

const ProjectView = (props: Props) => {
  return (
    <div className={'Holder ' + props.background}>
      <div className='ContentWrapper'>
      <p className='MiniTitle' style={{ paddingBottom: props.children ? '10px' : '20px'}}>{props.title}</p>
        { props.children && 
          <div className='TagWrapper'>
            { props.children }
          </div>
        }
      </div>
    </div>
  );
}

export default ProjectView;
