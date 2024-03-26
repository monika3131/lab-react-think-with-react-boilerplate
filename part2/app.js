// const container = document.getElementById('react-container')

// ReactDOM.render("Hello! I am CDN.", container);
// render(make)("what to render" (i.e Hello...) & "where to render" (container));


//  Class Component
class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>This is babel</div>
         </div> )
      };  
  }

  const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,container);    
