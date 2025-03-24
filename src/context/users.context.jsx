import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

const url = 'https://randomuser.me/api/?nat=gb,ca,us&inc=name,login&results=';
const key = 'I HateHavingToComeUpWithUniqueKeyNamesAllTheTime';

function UserProvider(props) {
  const [names, setNames] = useState([]);
  //the data that is shared through the useUser hook

  useEffect(() => {
    getInitialData();
  }, []);

  function getInitialData() {
    //check localstorage or do a fetch then update names
    let n = localStorage.getItem(key);
    if (n === null) {
      //nothing in localStorage
      fetch(url + 5)
        .then((resp) => {
          if (!resp.ok) throw new Error('No fetched results');
          return resp.json();
        })
        .then((data) => {
          setNames(data.results);
          n = JSON.stringify(data.results);
          localStorage.setItem(key, n);
        })
        .catch((err) => {
          //how to handle the error?
          //clear state?
          //clear storage?
          //do nothing?
          //tell user?
          console.warn(err.message);
        });
    } else {
      //something in localStorage
      n = JSON.parse(n);
      setNames(n);
    }
  }

  function addOne() {
    //fetch one more name
    //save in names and localstorage
  }

  function removeOne(uuid) {
    //remove one item from names
    //update names AND localstorage
  }

  return <UserContext.Provider {...props} value={{ names, addOne, removeOne }} />;
}

function useUser() {
  //
  const context = useContext(UserContext);
  if (!context) throw new Error('Hook is outside of Provider');
  return context; // actually giving us the value inside <ThemeContext.Provider>
}

export { UserProvider, useUser };
