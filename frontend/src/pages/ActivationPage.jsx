import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../server';

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/activation`, {
            activation_token
          });

          console.log(res.data.message);
        } catch (error) {
          console.log(error.response.data.message);
        }
      };
      activationEmail()
    }
  }, [activation_token])
  return (
    <div>ActivationPage</div>
  )
}

export default ActivationPage