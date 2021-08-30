import {createContext} from "React";

export const LocationContext = createContext({
    location: "All Rwanda",
    changeLocation: (value) =>{}
    })

export const ScrollContext = createContext({
    enableScroll:true,
    setScroll : (value) => {}
  })