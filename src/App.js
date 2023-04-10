import Form from "./componentes/Form";
function App() {

  return (
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Form />
        </div>       
          <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-sky-300 to-indigo-300 rounded-full animate-spin"/>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
        </div>
      </div>
  );
}

export default App;
