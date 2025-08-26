import ErrorBoundary from '../../components/ErrorBoundary';
import HealthyServerComponent from '../../components/HealthyServerComponent';
import ThrowingServerComponent from '../../components/ThrowingServerComponent';

const Page = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Error Boundary Only Page</h2>
      <span>
        This page renders a healthy component and a throwing component wrapped in an error boundary with a with a default fallback. <br />
        This text will not be visible in the client due to the error bubbling up.
      </span>
      <HealthyServerComponent />
      <ErrorBoundary>
        <ThrowingServerComponent />
      </ErrorBoundary>
    </>
  );
};

export default Page;
  