export default function({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/json'
    },
    transformResponse: [
      function(data) {
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }
        return data;
      }
    ]
  });

  // Inject to context as $api
  inject('api', api);
}