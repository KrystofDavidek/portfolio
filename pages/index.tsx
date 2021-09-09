import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

const index = ({ services }) => {
  return (
    <div>
      <h1>Bye bye</h1>
    </div>
  );
};

export default index;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  return { props: { services: data } };
};
