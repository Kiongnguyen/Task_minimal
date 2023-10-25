import { Helmet } from 'react-helmet-async';
import { ComponenrsView } from 'src/sections/components/view';


export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components</title>
      </Helmet>
      <ComponenrsView />
    </>
  );
}