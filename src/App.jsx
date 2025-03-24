import Header from './components/header';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <p>https://randomuser.me/api/?results=5&nat=gb,ca,us&inc=name,login</p>
      </main>
    </>
  );
}
