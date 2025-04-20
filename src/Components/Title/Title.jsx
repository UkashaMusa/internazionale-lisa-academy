import './Title.css';

const Title = ({para1,Header2}) => {
  return (
    <div className='title'>
        <p>{para1}</p>  
        <h2>{Header2}</h2>
    </div>
  )
}

export default Title