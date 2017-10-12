import Header from './Header';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <style jsx>{`
      div {
        margin: 20;
        padding: 20;
        border: 1px solid #ddd;
      }
    `}</style>
  </div>
);

export default Layout;
