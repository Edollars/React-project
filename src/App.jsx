import Project from '/src/Components/Project';
import Card from '/src/Components/Card';
import OurClass from '/src/Components/ourClass';


export default function App() {
return(
  <>
  <Project />
  <Card />
  <Card />
  <Card />

  <OurClass name='Eve'  university='Kyambogo University' age={35} isStudent={false} />
  <OurClass name='Calus' university='Makerere University' age={22} isStudent={true} />
  <OurClass name='Adlan' university='victoria University' age={20} isStudent={true} />
  <OurClass name='Cedric' university='IUIU' age={20} isStudent={true} />
  <OurClass />

  </>
)
}
