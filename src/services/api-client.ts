import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '92a97135bbe04868a9f97d2ec2218922'
  }
});
