import { Link, Outlet } from 'react-router-dom';

function Links() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Basic2">Basic2</Link>
        <Link to="/async1">async1</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Links;
