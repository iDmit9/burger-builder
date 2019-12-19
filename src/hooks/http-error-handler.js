import { useState, useEffect } from 'react';

export default HttpClient => {
   const [error, setError] = useState(null)

   const requestInterceptor = HttpClient.interceptors.request.use(req => {
      setError(null);
      return req;
   });
   const responseInterceptor = HttpClient.interceptors.response.use(res => res, err => {
      setError(err);
   })

   useEffect(() => {
      return () => {
         HttpClient.interceptors.request.eject(requestInterceptor)
         HttpClient.interceptors.response.eject(responseInterceptor)
      }
      // eslint-disable-next-line  
   }, [requestInterceptor, responseInterceptor])

   const errorConfirmedHandler = () => {
      setError(null);
   }

   return [error, errorConfirmedHandler];
}