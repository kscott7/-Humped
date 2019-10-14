import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.munro.name}</h1>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://munroapi.herokuapp.com/munros/name/${id}`);
  const munro = await res.json();

  console.log(res);

  return { munro };
};

export default Post;
