import { View, Text } from 'react-native'
import React from 'react'
import {createContext} from 'react'

export const AppContext = createContext({})

export function AppContextProvider({children}) {
    const userSignature = "start";
    const signature = {
      start: { battery: 100, rest: 2, reward: 1.05 },
      plus: { battery: 200, rest: 3, reward: 1.1 },
      top: { battery: 400, rest: 4, reward: 1.15 },
      premium: { battery: 800, rest: 6, reward: 1.2 },
    };
    const [balance, setBalance] = React.useState(0);
    const [battery, setBattery] = React.useState(signature[userSignature].battery)
    const [totalBattery, setTotalBattery] = React.useState(signature[userSignature].battery);
  return (
   <AppContext.Provider value={{battery, setBattery, totalBattery, setTotalBattery,balance,setBalance}} >
    {children}
   </AppContext.Provider>
  )
}