import { useState, useEffect } from "react";
import Layout from './component/layout';

const Acc = ({ pageProps }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Layout>
      <div className="w-max">
        <div>Coming Soon</div>
      </div>
    </Layout>
  );
};

export default Acc;
