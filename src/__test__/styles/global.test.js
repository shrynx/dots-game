import '../../styles/global';

test('injectGlobal', () => {
  const style = document.querySelector('style').innerHTML;
  expect(style).toContain(
    `body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;} button{border:none;background:none;padding:0;-webkit-appearance:none;} button:focus{outline:none;}`,
  );
});
