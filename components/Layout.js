const layoutStyle = {
  padding: 20
};

const Layout = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout;
