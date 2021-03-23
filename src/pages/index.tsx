import { GetStaticProps } from 'next';

interface Props {
  dictionary: [string, string][];
}

export default function Home({ dictionary }: Props) {
  // dictionary.map(console.log);

  return (
    <>
      <h1>Hello World</h1>
      <table>
        <thead>
          <tr>
            <th>VAR</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dictionary.map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dictionary = Object.entries(process.env);
  return { props: { dictionary } };
};
