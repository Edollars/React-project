export default OurClass 
import Styles from '/src/Components/index.module.css';
// import propTypes from 'src/React-practice/node_modules/prop-types';

function OurClass(props){
    return(
        <div className= {Styles.OurClass}>
            <p>Name: {props.name} </p>
            <p>University: {props.university} </p>
            <p>Age: {props.age} </p>
            <p>Student:  {props.isStudent ? 'Yes':'No'} </p>

        </div>

    )
}

// OurClass.propTypes={
//     name: propTypes.string,
//     age: propTypes.number,
//     isStudent: propTypes.bool
// }

OurClass.defaultProps={
    Name: 'Guest',
    University: '',
    Age: 0,
    isStudent: false,
}