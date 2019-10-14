import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>🏔 Humped</h1>
    <ul>
      {props.munros.map(munro => (
        <li key={munro.smcid}>
          <Link href="/p/[id]" as={`/p/${munro.name}`}>
            <a>{munro.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://munroapi.herokuapp.com/munros');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    munros: data.map(entry => entry)
  };
};

export default Index;
