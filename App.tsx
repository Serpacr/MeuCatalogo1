import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './src/routes/stack_routes'

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}