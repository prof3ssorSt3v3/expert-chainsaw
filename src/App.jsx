import Card from './components/card';
import Header from './components/header';
import { useUser } from './context/users.context';
import { useEffect } from 'react';

export default function App({ children }) {
  // const [names] = useUser();
  const { names } = useUser();

  useEffect(() => {
    console.log(names);
  }, [names]);

  return (
    <>
      <Header eric={true}>
        <p>Common part for every version of header</p>
      </Header>
      <main>
        <h2>There are {names.length} names.</h2>
        {names.map((n) => (
          <Card key={n.login.uuid} name={n} />
        ))}
      </main>
    </>
  );
}
