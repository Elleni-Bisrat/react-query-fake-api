import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function RouteErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>

        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Something went wrong.</h1>
    </div>
  );
}

// import { useRouteError } from 'react-router-dom';

// export const RouteErrorBoundary = () => {
//   const error = useRouteError() as any;
//   console.error(error);

//   return (
//     <div className="p-4 text-red-500">
//       <h1>Something went wrong</h1>
//       <p>{error?.message || 'Unknown error'}</p>
//     </div>
//   );
// };